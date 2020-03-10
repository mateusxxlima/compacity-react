import React, { Component } from 'react'

class FormularioCidade extends Component {

    constructor(props) {
        super(props)

        this.stateInicial = {
            nome: '',
            estado: ''
        }

        this.state = this.stateInicial

    }

    escutadorDeInput = event => {

        const { name, value } = event.target

        this.setState({
            [name] : [value]
        })

    }

    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state)

        //console.log(this.state.nome)

        this.setState(this.stateInicial)
    }

    render() {

        const { nome, estado } = this.state

        return (

            <form>
                <div className="row">

                    <div className="input-field col s6">
                        <label className="input-field" htmlFor="nome">Cidade </label>
                        <input
                            className="validate"
                            type="text"
                            name="nome"
                            value = { nome }
                            onChange = { this.escutadorDeInput } />
                    </div>

                    <div className="input-field col s6">
                        <label className="input-field" htmlFor="estado">Estado </label>
                        <input
                            className="validate"
                            type="text" 
                            name="estado"
                            value = { estado }
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

export default FormularioCidade