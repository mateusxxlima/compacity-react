import React, { Component } from 'react'

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Estado</th>
                <th>Cidade</th>
                <th>Remover</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const cidade = props.cidades.map((linha, index) =>{

        return (
            <tr key = { index }>
                <td>{linha.nome}</td>
                <td>{linha.estado}</td>
                <td><button onClick = { () => { props.removeCidade(index)}}>Remover</button></td>             
            </tr>
        )   

    })

    return (
        <tbody>
            { cidade }
        </tbody>
    )
}

class TabelaCidade extends Component {

    render() {

        const { cidades, removeCidade } = this.props

        return (
            <table className="highlight centered">
                <TableHead />
                <TableBody cidades = { cidades } removeCidade = { removeCidade } />
            </table>
        )   
    }

}

export default TabelaCidade