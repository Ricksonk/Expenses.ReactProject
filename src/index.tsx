import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model} from 'miragejs'

createServer({
  models:{
    transaction: Model,
  
  },
   seeds(server){
  server.db.loadData({
    transactions:[

     {
       id:1,
       title:'Freelance de Website',
       type: 'deposit',
       category:'Dev',
       amount: 6000,
       createdAt: new Date('2021-02-12 08:00:20'),
     },

     {
      id:2,
      title:'Aluguel',
      type: 'withdraw',
      category:'aluguel',
      amount: 1200,
      createdAt: new Date('2021-04-16 09:52:31'),
    },

    {
      id:3,
      title:'Jantar',
      type: 'withdraw',
      category:'comida',
      amount: 60,
      createdAt: new Date('2021-02-13 19:02:42'),
    },
    ]
  })
   },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () =>{
      return this.schema.all('transaction')
      
    })
    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


