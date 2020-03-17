import React, { Component } from 'react'

class TableCity extends Component {
    
    render() {                            

        return (

            <table className="centered striped">

                <thead>
                    <tr>
                        <th>Cidade</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{this.props.city.nome}</td>
                        <td>{this.props.city.latitude}</td>
                        <td>{this.props.city.longitude}</td>

                        <td><button type="submit"
                            onClick = { () => { this.props.removeCity(this.props.city.cidadeId) }}
                            className="waves-effect waves-light red lightin-2 btn" >
                            Remover
                        </button></td>
                        
                    </tr>

                    <tr>

                        <td>
                            <input type="text" id="name" size="5" placeholder="Nome"
                                onChange = { event => { this.name = event.target.value } } />
                        </td>

                        <td>
                            <button
                                onClick = { () => { this.props.getCityByName(this.name) } } >
                                Search
                            </button>
                        </td>

                    </tr>
                </tbody>


            </table>
        )
    }
}

export default TableCity

