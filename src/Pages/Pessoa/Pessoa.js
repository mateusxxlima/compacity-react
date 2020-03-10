import React, { Component, Fragment } from 'react'

import 'materialize-css/dist/css/materialize.min.css'

import Header from '../../Utils/Header'
import FormularioPessoa from './FormularioPessoa'
import TabelaPessoa from './TabelaPessoa'

class Pessoa extends Component {

    state = {
        pessoa : {
            nomeCompleto : 'Mateus Lima',
            cidade : 'Chapecó',
            dataNascimento : '24/09/1995'
        }
    }

    render() {
        const { pessoa } = this.state
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Pessoas</h1>
                    <TabelaPessoa pessoa = { pessoa } />
                    <FormularioPessoa />
                </div>
            </Fragment>
        )
    }

}

export default Pessoa