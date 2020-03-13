import React, { Component } from 'react'

class FormClient extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            nome: '',
            sobrenome: '',
            sexo: '',
            dataNascimento: '',
            idade: '',
            cidadeModel : {cidadeId : 4202008}
        }

        this.state = this.initialState

    }

    inputListen = event => {

        const { name, value } = event.target        

        this.setState({
            [name] : value
        })

    }

    submit = () => {
        this.props.createClient(this.state)
        this.setState(this.initialState)
    }

    render() {

        const { nome, sobrenome, sexo, dataNascimento, idade } = this.state

        return (

            <form>
                <div className="row">

                    <div className="input-field col s2">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            className="validate"
                            type="text"
                            name="nome"
                            value = { nome }
                            onChange = { this.inputListen } />
                    </div>

                    <div className="input-field col s2">
                        <label className="input-field" htmlFor="sobrenome">Sobrenome</label>
                        <input
                            className="validate"
                            type="text" 
                            name="sobrenome"
                            value = { sobrenome }
                            onChange = { this.inputListen } />
                    </div>

                    <div className="input-field col s2">
                        <label className="input-field" htmlFor="sexo">Sexo</label>
                        <input
                            className="validate"
                            type="text" 
                            name="sexo"
                            value = { sexo }
                            onChange = { this.inputListen } />
                    </div>

                    <div className="input-field col s2">
                        <label className="input-field" htmlFor="dataNascimento">Data de Nasc</label>
                        <input
                            className="validate"
                            type="text" 
                            name="dataNascimento"
                            value = { dataNascimento }
                            onChange = { this.inputListen } />
                    </div>

                    <div className="input-field col s2">
                        <label className="input-field" htmlFor="idade">Idade</label>
                        <input
                            className="validate"
                            type="text"
                            name="idade"
                            value = { idade }
                            onChange = { this.inputListen } />
                    </div>              

                </div>

                <div>
                    <button 
                        className="waves-effect waves-light red lightin-2 btn"
                        onClick = { () => { this.submit() } }    
                        type="button">
                            Cadastrar
                    </button>
                </div>

            </form>
            
        )
    }
}

export default FormClient