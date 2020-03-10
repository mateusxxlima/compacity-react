import React, { Component } from 'react'

class TabelaPessoa extends Component {  
    
    render() {

        const { pessoa } = this.props                

        return (

            <table>

                <thead>
                    <tr>
                        <th>Nome Completo</th>
                        <th>Cidade</th>
                        <th>Data de Nascimento</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{ pessoa.nomeCompleto }</td>
                        <td>{ pessoa.cidade }</td>
                        <td>{ pessoa.dataNascimento }</td>
                    </tr>
                </tbody>

            </table>

        )
    }
}

export default TabelaPessoa