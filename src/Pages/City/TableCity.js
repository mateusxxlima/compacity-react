import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCityByName, delCity } from '../../store/actions/city.action'

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
                            onClick = { () => { this.props.delCity(this.props.city.cidadeId) }}
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
                                onClick = { ()  => { this.props.getCityByName(this.name) } } >
                                Search
                            </button>
                        </td>
                    </tr>

                </tbody>

            </table>
        )
    }
}

const mapStateToProps = state => ({
    city : state.cityReducer
})

const mapDispatchToProps = dispatch => ({
    getCityByName: cityName => dispatch(getCityByName(cityName)),
    delCity: cityId => dispatch(delCity(cityId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TableCity)

