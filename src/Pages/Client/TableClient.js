import React, { Component } from 'react'

class TableClient extends Component {

    constructor(props) {
        super(props)

        var clientId = ''
        var name = ''

    }
    
    render() {

        const { client, getClientById, removeClient, getClientByName } = this.props                

        return (

            <table>

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
                        <td>{ client.clienteId }</td>
                        <td>{ client.nome }</td>
                        <td>{ client.sobrenome }</td>
                        <td>{ client.sexo }</td>
                        <td>{ client.dataNascimento }</td>
                        <td>{ client.idade }</td>
                        <td>
                            <button onClick = { () => { removeClient(client.clienteId) } }
                                className="waves-effect waves-light red lightin-2 btn" >
                                Remove
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" id="ClienteId" size="1" placeholder="Id"
                                onChange = { event => { this.clienteId = event.target.value } } />
                        </td>

                        <td>
                            <button
                                onClick = { () => { getClientById(this.clienteId) } } >
                                Search
                            </button>
                        </td>

                        <td>
                            <input type="text" id="name" size="5" placeholder="Nome"
                                onChange = { event => { this.name = event.target.value } } />
                        </td>

                        <td>
                            <button
                                onClick = { () => { getClientByName(this.name) } } >
                                Search
                            </button>
                        </td>

                    </tr>

                </tbody>

            </table>

        )
    }
}

export default TableClient