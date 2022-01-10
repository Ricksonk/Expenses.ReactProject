import logoImg from '../../assets/iconN.png'
import {Container, Content} from './styles';

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
   }
   
export function Header({onOpenNewTransactionModal}: HeaderProps){
    
    return(
        <Container>
            <Content>
            <img src={logoImg} alt="rd money" />
            <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
           
        </Container>
    )
}