import React, { Component, Fragment } from 'react'

import 'materialize-css/dist/css/materialize.min.css'

import ApiService from '../../Utils/ApiService'
import Header from '../../Utils/Header'
import Footer from '../../Utils/Footer'
import PopUp from '../../Utils/PopUp'
import FormClient from './FormClient'
import TableClient from './TableClient'

class Client extends Component {

    constructor(props) {
        super(props)

        this.state = {
            client : {
                cidadeModel: {}
            }
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

                </div>

                <Footer />

            </Fragment>
        )
    }

}

export default Client