import { useEffect } from 'react'
import { api } from '../../services/api';
import { Container } from "./styles";

export function TransactionsTable () {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);


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
                        <td>Desenvolvimento de App</td>
                        <td className="deposit">10.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/04/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-1.000,00</td>
                        <td>Casa</td>
                        <td>20/04/2021</td>
                    </tr>


                </tbody>
            </table>
        </Container>
    )
}