import React from 'react'
import { Container } from './styles'

export function TransactionTable() {
  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr> 
            </thead>
            <tbody>
                <tr>
                    <td>Desenvolvimento do App</td>
                    <td className="deposit">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>27/04/2022</td>
                </tr>
                <tr>
                    <td>Imposto</td>
                    <td className="withdraw">- R$1.000</td>
                    <td>Injusto</td>
                    <td>27/04/2022</td>
                </tr>
            </tbody>
        </table>
    </Container>
  )
}
