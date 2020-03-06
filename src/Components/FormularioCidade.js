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
        this.setState(this.stateInicial)
    }

    render() {

        const { nome, estado } = this.state

        return (
            <form>
                <label htmlFor="nome">Cidade: </label>
                <input
                    type="text"
                    name="nome"
                    value = { nome }
                    onChange = { this.escutadorDeInput } />

                <label htmlFor="estado">Estado: </label>
                <input
                    type="text" 
                    name="estado"
                    value = { estado }
                    onChange = { this.escutadorDeInput } />

                <button onClick = { () => { this.submitFormulario() } } type="button">Cadastrar</button>
            </form>
        )
    }
}

export default FormularioCidade