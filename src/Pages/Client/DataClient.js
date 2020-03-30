import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllClients } from '../../store/actions/client.action'

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
    
    componentDidMount() {
        this.props.getAllClients()
    }

    render() {

        return (
            <table className="dataTable striped">
                <TableHead />
                <TableBody allClient = { this.props.arrayClient } />
            </table>
        );
    }
}

const mapStateToProps = state => ({
    arrayClient : state.arrayClientReducer
})

const mapDispatchToProps = dispatch => ({
    getAllClients: () => dispatch(getAllClients())
})

export default connect(mapStateToProps, mapDispatchToProps)(DataClient)