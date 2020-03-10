import React, { Component } from 'react'

class FormularioPessoa extends Component {

    constructor(props) {
        super(props)

        this.stateInicial = {
            nomeCompleto: '',
            cidade: '',
            dataNascimento: ''
        }

        this.state = this.stateInicial

    }


    render() {

        const { nomeCompleto, cidade, dataNascimento } = this.state

        return (

            <form>
                <div className="row">

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nomeCompleto">Nome Completo </label>
                        <input
                            className="validate"
                            type="text"
                            name="nomeCompleto"
                            value = { nomeCompleto }
                            onChange = { this.escutadorDeInput } />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="cidade">Cidade</label>
                        <input
                            className="validate"
                            type="text" 
                            name="cidade"
                            value = { cidade }
                            onChange = { this.escutadorDeInput } />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="dataNascimento">Data de Nascimento</label>
                        <input
                            className="validate"
                            type="text" 
                            name="dataNascimento"
                            value = { dataNascimento }
                            onChange = { this.escutadorDeInput } />
                    </div>

                </div>

                <div>
                    <button 
                        className="waves-effect waves-light red lightin-2 btn"
                        onClick = { () => { this.submitFormulario() } }    
                        type="button">
                            Cadastrar
                    </button>
                </div>

            </form>
        )
    }
}

export default FormularioPessoa