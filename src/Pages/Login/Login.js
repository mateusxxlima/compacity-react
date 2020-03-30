import React, { Component } from 'react'
import LinkWrapper from '../../Utils/LinkWrapper'
import './Login.css'

class Body extends Component {

    constructor(props) {
        super(props)

        this.intialState = {
            email: '',
            password: ''
        }

        this.state = this.intialState

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
                    <div className="row login">
                        <div className=" col s12 m8 l8 offset-m2 offset-l2">
                            <div className="card">

                                <div className="card-action red white-text">
                                    <h3>Entrar</h3>
                                </div>

                                <div className="card-content">

                                    <div className="form-field">
                                        <label htmlFor="email">E-mail:</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={ this.state.email }
                                            onChange = { this.inputListen } />
                                    </div><br />

                                    <div className="form-field">
                                        <label htmlFor="password">Senha:</label>
                                        <input 
                                            type="password" 
                                            name="password"
                                            value={ this.state.password }
                                            onChange = { this.inputListen } />
                                    </div><br />

                                    <div className="form-field">
                                        <p>
                                            <label>
                                                <input 
                                                    type="checkbox" className="filled-in" />
                                                <span>Lembrar-me</span>
                                            </label>
                                        </p>
                                    </div><br />

                                    <div className="form-field center-align">
                                        <button id="btnLogin" 
                                            className="btn-large red"
                                            onClick = { () => { this.submit() } }>
                                        Fazer login</button>
                                    </div>

                                    <div className="form-field center-align">
                                        <button id="btnRegister" 
                                            className="btn-large red">
                                                <LinkWrapper to = "/register">
                                                    Registrar-se
                                                </LinkWrapper>
                                        </button>
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

export default Body