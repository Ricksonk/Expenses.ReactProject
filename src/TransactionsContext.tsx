import { createContext, ReactNode, useState, useEffect } from 'react';
import {api} from "./services/api";

interface TransactionsProviderProps{
    children: ReactNode;
}
interface Transaction{
    id:number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}
type TransactionImput = Omit<Transaction, 'id' | 'createdAt'>;
interface TransactionsContextData{
    transactions: Transaction[];
    createTransaction:(transaction: TransactionImput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
    );

export function TransactionsProvider({children}:TransactionsProviderProps){
  
        const[transactions, setTransactions] = useState<Transaction[]>([]);
    
        useEffect(() =>{
            api.get('transactions')
            .then(response =>setTransactions(response.data.transactions))
        },[]);

     async function createTransaction(transactionInput: TransactionImput){
       
            const response = await api.post('/transactions', {...transactionInput, createdAt: new Date(),});
            const{ transaction } = response.data;
            setTransactions([
                ...transactions,
                transaction,
            ]);
        }

        return(
            <TransactionsContext.Provider value={{transactions, createTransaction}}>
                {children}
            </TransactionsContext.Provider>
            
        );
        
}