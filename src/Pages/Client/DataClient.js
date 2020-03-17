import React, { Component } from 'react'

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>Sexo</th>
                <th>Data Nasc</th>
                <th>Idade</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const linhas = props.allClient.map((line, index) => {
        
        return (
            <tr key={index}>
                <td>{line.clienteId}</td>
                <td>{line.nome}</td>
                <td>{line.sobrenome}</td>
                <td>{line.sexo}</td>
                <td>{line.dataNascimento}</td>
                <td>{line.idade}</td>              
            </tr>
        );
    });

    return(
        <tbody>
            { linhas }
        </tbody>
    );
}

class DataClient extends Component {
    
    render() {

        return (
            <table className="centered striped">
                <TableHead />
                <TableBody allClient = {  this.props.allClient } />
            </table>
        );
    }
}


export default DataClient