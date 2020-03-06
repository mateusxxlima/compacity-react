import React, { Fragment, Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';

import Cidade from './Pages/Cidade'
import Header from './Components/Header'



class App extends Component {

	state = {
		cidades : [
			{
				nome: 'Nonoai',
				estado: 'Rio Grande do Sul'
			},
			{
				nome: 'Caldas Novas',
				estado: 'Goiás'
			},
			{
				nome: 'Conceição da Barra',
				estado: 'Espirito Santo'
			},
			{
				nome: 'Rio dos Índios',
				estado: 'Rio Grande do Sul'
			}
		]
	}

	removeCidade = index => {
		
		const { cidades } = this.state

		this.setState({
			cidades : cidades.filter((cidade, posAtual) => {
				return posAtual !== index
			})
		})

	}

	escutadorDeSubmit = novaCidade => {

		this.setState({
			cidades : [...this.state.cidades, novaCidade]
		})

	}

	render() {
		return (
			<Fragment>
				<Header />
				<Cidade 
					cidades = { this.state.cidades } 
					removeCidade = { this.removeCidade }
					escutadorDeSubmit = { this.escutadorDeSubmit } />
			</Fragment>
		)
	}
}

export default App;
