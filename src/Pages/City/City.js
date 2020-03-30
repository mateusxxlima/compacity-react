import React, { Component, Fragment } from 'react'

import 'materialize-css/dist/css/materialize.min.css'

import Header from '../otherComponents/Header'
import TableCity from './TableCity'
import FormCity from './FormCity'
import DataCity from './DataCity'
import Footer from '../otherComponents/Footer'

class City extends Component {

    render() {     
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Cidades</h1>
                    <TableCity />
                    <FormCity />
                    <DataCity />
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default City