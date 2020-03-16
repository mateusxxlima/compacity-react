import React, { Component, Fragment } from 'react'

import 'materialize-css/dist/css/materialize.min.css'

import Header from '../../Utils/Header'
import Footer from '../../Utils/Footer'
import ApiService from '../../Utils/ApiService'
import PopUp from '../../Utils/PopUp'

import TableCity from './TableCity'
import FormCity from './FormCity'
import DataCity from './DataCity'

class City extends Component {

    constructor(props) {
        super(props)
        this.state = {
            city : {},
            allCities : []
        }

    }

    createCity = city => {

        ApiService.createCity(JSON.stringify(city))
            .then(res => PopUp.showMessage('green', 'Cidade cadastrada com sucesso!'))
            .catch(res => PopUp.showMessage('red', 'Erro ao cadastrar cidade!'))

    }

    getCityByName = name => {
        ApiService.getCityByName(name)
            .then(res => this.setState({city : res}))
            .catch( err => {
                PopUp.showMessage('red', 'Cidade inesistente!')                
            })
    }
    
    removeCity = cityId => {
        
        ApiService.removeCity(cityId)
            this.setState({city : {}})
            PopUp.showMessage('green', 'Cidade removida!')

    }

    componentDidMount() {

        ApiService.getAllCities()
            .then(res => this.setState({allCities : res}))

    }

    render() {     

        return (
            <Fragment>

                <Header />

                <div className="container">

                    <h1>Cidades</h1>

                    <TableCity
                        city = { this.state.city }
                        getCityByName = { this.getCityByName }
                        removeCity = { this.removeCity } />

                    <FormCity
                        createCity = { this.createCity } />

                    <DataCity
                        allCities = { this.state.allCities } />

                </div>

                <Footer />

            </Fragment>
        )

    }
}

export default City