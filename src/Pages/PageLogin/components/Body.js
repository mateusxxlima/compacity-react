import React, { Component } from 'react'
import './Body.css'

class Body extends Component {
    render() {
        return (
            <div className="container">

                <form>

                    <h2>Login</h2>

                    <label htmlFor="email">E-mail:</label>
                    <input name="email" placeholder="Digite seu E-mail aqui ..." />

                    <label htmlFor="password">Senha:</label>
                    <input name="password" placeholder="Digite sua senha aqui ..." />

                </form>
            </div>
        )
    }
}

export default Body