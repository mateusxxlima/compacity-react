import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getClientById, getClientByName, delClient } from '../../store/actions/client.action'

class TableClient extends Component {
    
    render() {
        return (
            <table className="dataTable striped">
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

                <tbody>
                    <tr>
                        <td>{ this.props.client.clienteId }</td>
                        <td>{ this.props.client.nome }</td>
                        <td>{ this.props.client.sobrenome }</td>
                        <td>{ this.props.client.sexo }</td>
                        <td>{ this.props.client.dataNascimento }</td>
                        <td>{ this.props.client.idade }</td>

                        <td>
                            <div>
                                <button 
                                    className="waves-effect waves-light red lightin-2 btn"
                                    onClick = { () => { this.props.delClient(this.props.client.clienteId) } }    
                                    type="button">
                                        Excluir
                                </button>
                            </div>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            <input type="text" id="ClienteId" size="1" placeholder="Id"
                                onChange = { event => { this.clienteId = event.target.value } } />
                        </td>

                        <td>
                            <button
                                onClick = { () => { this.props.getClientById(this.clienteId) } } >
                                Search
                            </button>
                        </td>

                        <td>
                            <input type="text" id="name" size="5" placeholder="Nome"
                                onChange = { event => { this.clientName = event.target.value } } />
                        </td>

                        <td>
                            <button
                                onClick = { () => { this.props.getClientByName(this.clientName) } } >
                                Search
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    client: state.clientReducer
 })
 
 const mapDispatchToProps = dispatch => ({
    getClientById: clientId => dispatch(getClientById(clientId)),
    getClientByName: clientName => dispatch(getClientByName(clientName)),
    delClient: clientId => dispatch(delClient(clientId))
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(TableClient)