import { Container } from "./styles";
import { Summary } from '../Summary/index';
import { TransactionTable } from '../TransactionTable/index';

export function Dashboard(){
    return(
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}