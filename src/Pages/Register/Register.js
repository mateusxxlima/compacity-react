import React, { Component } from 'react'
import './register.css'

class Register extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            nome: '',
            sobrenome: '',
            dataNasc: '',
            email: '',
            password: ''
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
        console.log(this.state)
    }

    render() {
        return (
            <div className="divBody">
                <div className="container">
                    <div className="row register">
                        <div className=" col s12 m8 l8 offset-m2 offset-l2">
                            <div className="card">

                                <div className="card-action red white-text">
                                    <h3>Registrar-se</h3>
                                </div>

                                <div className="card-content">
                                
                                <form>

                                    <div className="form-field">
                                            <label htmlFor="nome">Nome:</label>
                                            <input 
                                                className="myInput"   
                                                name="nome"
                                                value={this.state.nome}
                                                onChange = { this.inputListen } />
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="sobrenome">Sobrenome:</label>
                                            <input 
                                                className="myInput" 
                                                name="sobrenome"
                                                onChange = { this.inputListen }
                                                value={this.state.sobrenome} />
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="dataNasc">Data Nascimento:</label>
                                            <input 
                                                className="myInput" 
                                                name="dataNasc"
                                                onChange = { this.inputListen }
                                                value={this.state.dataNasc} />
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="email">E-mail:</label>
                                            <input 
                                                className="myInput" 
                                                type="email" 
                                                name="email"
                                                onChange = { this.inputListen }
                                                value={this.state.email} />
                                        </div>

                                        <div className="form-field">
                                            <label htmlFor="password">Senha:</label>
                                            <input 
                                                className="myInput" 
                                                type="password" 
                                                name="password"
                                                onChange = { this.inputListen }
                                                value={this.state.password} />
                                        </div>

                                    </form>

                                    <div className="form-field center-align">
                                        <button onClick = { () => { this.submit() } } className="btn-large red">Registrar-se</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Register