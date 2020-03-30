import React, { Component } from 'react'

import 'materialize-css/dist/css/materialize.min.css'

import Header from '../otherComponents/Header'
import TableClient from './TableClient'
import FormClient from './FormClient'
import DataClient from './DataClient'
import Footer from '../otherComponents/Footer'

class Client extends Component {

    render() {
        return (
            <>
                <Header />
                <div className="container">
                    <h1>Clientes</h1>
                    <TableClient />
                    <FormClient />
                    <DataClient />
                </div>
                <Footer />
            </>
        )
    }

}

export default Client
