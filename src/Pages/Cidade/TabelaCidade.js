import React, { Component } from 'react'

class TabelaCidade extends Component {
    
    render() {

        const { cidade, setCidade, removeCidade } = this.props                               

        return (
            <table>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{cidade.id}</td>
                        <td>{cidade.nome}</td>
                        <td>{cidade.estado}</td>

                        <td><button type="submit"
                            onClick = { () => { removeCidade(cidade.id) }}
                            className="waves-effect waves-light red lightin-2 btn" >
                            Remover
                        </button></td>
                        
                    </tr>
                    <tr>
                        <td>
                            <input type="number" nome="id" 
                            onChange = { event => { setCidade(event.target.value) } } />
                        </td>
                    </tr>
                </tbody>


            </table>
        )
    }
}

export default TabelaCidade

