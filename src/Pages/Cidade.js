import React, { Component } from 'react'
import FormularioCidade from '../Components/FormularioCidade'
import TabelaCidade from '../Components/TabelaCidade'

class Cidade extends Component {
    render() {
        const { cidades, removeCidade, escutadorDeSubmit } = this.props
        return (
            <div>
                <div className="container">
                    <FormularioCidade escutadorDeSubmit = { escutadorDeSubmit } />
                    <TabelaCidade 
                        cidades = { cidades } 
                        removeCidade = { removeCidade} />
                </div>
            </div>
        )
    }
}

export default Cidade