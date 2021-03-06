import LogoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'
interface HeaderProps {
    onOpenNewTransitionModal: () => void;
}

export function Header({ onOpenNewTransitionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="dt-money" />
                <button type="button" onClick={onOpenNewTransitionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}