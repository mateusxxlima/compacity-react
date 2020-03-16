import React, { Component, Fragment } from 'react'

import 'materialize-css/dist/css/materialize.min.css'

import ApiService from '../../Utils/ApiService'
import Header from '../../Utils/Header'
import Footer from '../../Utils/Footer'
import PopUp from '../../Utils/PopUp'

import TableClient from './TableClient'
import FormClient from './FormClient'
import DataClient from './DataClient'

class Client extends Component {

    constructor(props) {
        super(props)

        this.state = {
            client : {
                cidadeModel: {}
            },
            allClient : []
        }

    }

    createClient = client => {
      
        ApiService.createClient(JSON.stringify(client))
        .then(res => PopUp.showMessage('green', 'Cliente cadastrado com sucesso!'))
        .catch(res => PopUp.showMessage('red', 'Erro ao cadastrar cliente!'))

    }

    getClientById = clientId => {

        ApiService.getClientById(clientId)
            .then(res => this.setState({ client : res}))
    .catch(err => PopUp.showMessage('red', 'Cliente inesistente!'))

    }

    getClientByName = name => {        

        ApiService.getClientByName(name)
            .then(res => this.setState({ client : res}))
            .catch(err => PopUp.showMessage('red', 'Cliente inesistente!'))       

    }

    removeClient = clientId => {

        ApiService.removeClient(JSON.stringify(clientId))
            .then(res => console.log(res))
            this.setState({client : {}})
            PopUp.showMessage('green', 'Cliente removido com sucesso!')

    }

    componentDidMount() {

        ApiService.getAllClients()
            .then(res => this.setState({allClient : res}))    
        
    }

    render() {

        return (
            <Fragment>

                <Header />

                <div className="container">

                    <h1>Clientes</h1>

                    <TableClient
                        client = { this.state.client }
                        getClientById = { this.getClientById }
                        getClientByName = { this.getClientByName }
                        removeClient = { this.removeClient } />

                    <FormClient
                        createClient = { this.createClient } />

                    <DataClient
                        allClient = { this.state.allClient } />

                </div>

                <Footer />

            </Fragment>
        )
    }

}

export default Client