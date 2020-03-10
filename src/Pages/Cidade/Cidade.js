import React, { Component, Fragment } from 'react'

import 'materialize-css/dist/css/materialize.min.css'

import Header from '../../Utils/Header'
import ApiService from '../../Utils/ApiService'
import FormularioCidade from './FormularioCidade'
import TabelaCidade from './TabelaCidade'

class Cidade extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cidade : {}
        }

    }

    removeCidade(key) {
        
        ApiService.removeCidade(key)
        this.setState({cidade : {}})

    }

    setCidade = (key) => {

        ApiService.getCidade(key).then(res => {
            this.setState({cidade : res.data})            
        })

    }

    criaCidade(estado) {
        ApiService.criaCidade(JSON.stringify(estado))
            .then(res => res.data)
            .then(res => console.log(res.data))
            ApiService.getCidade(this.state.cidade.id).then(res => {
                this.setState({cidade : this.stateInicial})
            })
    }

    render() {        
        
        const { cidade } = this.state
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Cidades</h1>
                    <TabelaCidade
                        cidade = { cidade }
                        setCidade = { this.setCidade }
                        removeCidade = { this.removeCidade } />
                    <FormularioCidade
                        criaCidade = { this.criaCidade } />
                </div>
            </Fragment>
        )

    }
}

export default Cidade