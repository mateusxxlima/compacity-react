import React, { Component } from 'react'

class FormCity extends Component {

    constructor(props) {
        super(props)

        this.initialState = {
            nome: '',
            longitude: '',
            latitude: '',
            capital: false,
            estadoModel : {
                estadoId:11
            }
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
        this.props.createCity(this.state)
        this.setState(this.initialState)
    }

    render() {

        const { nome, latitude, longitude } = this.state

        return (

            <form>
                <div className="row">

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Cidade</label>
                        <input
                            className="validate"
                            type="text"
                            name="nome"
                            value = { nome }
                            onChange = { this.inputListen } />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="latitude">Latitude</label>
                        <input
                            className="validate"
                            type="text"
                            name="latitude"
                            value = { latitude }
                            onChange = { this.inputListen } />
                    </div>                    

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="longitude">Longitude</label>
                        <input
                            className="validate"
                            type="text"
                            name="longitude"
                            value = { longitude }
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

export default FormCity