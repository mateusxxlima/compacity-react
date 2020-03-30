import { takeLatest, put, all, call } from 'redux-saga/effects'
import ApiService from '../../Utils/ApiService'
import PoUp from '../../Utils/PopUp'

// CHAMADAS PARA CLIENTE
	function* sagaAddClient(action) {
		try {
			yield call(ApiService.createClient, action.payload)
			yield put({ type: 'GET_CLIENT_BY_NAME_ON_API', payload: action.payload.nome })
			yield put({ type: 'GET_ALL_CLIENTS_ON_API', payload: []})
			PoUp.showMessage('green', 'Cliente cadastrado com sucesso!')
		} catch (err) {
			PoUp.showMessage('red', 'Erro ao cadastrar cliente!')
			console.log('Erro -> ', err)
		}
	}

	function* sagaGetClientById(action) {		
		try {
			var client = yield call(ApiService.getClientById, action.payload)
			yield put({ type: 'GET_CLIENT', payload: client })
			PoUp.showMessage('green', 'Cliente encontrado!') 
		} catch (err) {
			PoUp.showMessage('red', 'Erro ao buscar cliente!')
			console.log('Erro -> ', err)
		}
	}

	function* sagaGetClientByName(action) {
		try {
			var client = yield call(ApiService.getClientByName, action.payload)
			yield put({ type: 'GET_CLIENT', payload: client })
			PoUp.showMessage('green', 'Cliente encontrado!')		
		} catch (err) {
			PoUp.showMessage('red', 'Erro ao buscar cliente!')
			console.log('Erro -> ', err)
		}	
	}

	function* sagaGetAllClients() {
		try {
			var client = yield call(ApiService.getAllClients)
			yield put({ type: 'GET_ALL_CLIENT', payload: client })		
		} catch (err) {
			PoUp.showMessage('red', 'Erro ao carregar tabela de clientes!')
			console.log('Erro -> ', err)
		}			
	}

	function* sagaDelClient(action) {
		try {
			yield call(ApiService.removeClient, action.payload)
			yield put({ type: 'DEL_CLIENT', payload: '' })
			yield put({ type: 'GET_ALL_CLIENTS_ON_API', payload: []})
			PoUp.showMessage('green', 'Cliente removido com sucesso!')
		} catch (err) {
			PoUp.showMessage('red', 'Erro ao remover cliente!')
			console.log('Erro -> ', err)
		}	
	}

// CHAMADAS PARA CIDADE
	function* sagaAddCity(action) {
		try {
			yield call(ApiService.createCity, action.payload)
			yield put({ type: 'GET_CITY_BY_NAME_ON_API', payload: action.payload.nome })
			yield put({ type: 'GET_ALL_CITY_ON_API', payload: [] })			
			PoUp.showMessage('green', 'Cidade cadastrada com sucesso!')
		} catch (err) {
			PoUp.showMessage('red', 'Erro ao cadastrar cidade!')
			console.log('Erro -> ', err)
		}
	}

	function* sagaGetCityByName(action) {
		try {
			var city = yield call(ApiService.getCityByName, action.payload)
			yield put({ type: 'GET_CITY_BY_NAME', payload: city})
			PoUp.showMessage('green', 'Cidade encontrada!') 
		} catch (err) {
			PoUp.showMessage('red', 'Erro ao buscar cidade!')
			console.log('Erro -> ', err)
		}		
	}

	function* sagaGetAllCity() {
		try {
			var city = yield call(ApiService.getAllCities)
			yield put({ type: 'GET_ALL_CITY', payload: city })		
		} catch (err) {
			PoUp.showMessage('red', 'Erro ao carregar tabela de cidades!')
			console.log('Erro -> ', err)
		}		
	}

	function* sagaDelCity(action) {
		try {
			yield call(ApiService.removeCity, action.payload)
			yield put({ type: 'DEL_CITY', payload: {} })
			yield put({ type: 'GET_ALL_CITY_ON_API', payload: [] })
			PoUp.showMessage('green', 'Cidade removida com sucesso!')
		} catch (err) {
			PoUp.showMessage('red', 'Erro ao remover cidade!')
			console.log('Erro -> ', err)
		}		
	}

export default function* root() {

	yield all([
		takeLatest('GET_CITY_BY_NAME_ON_API', sagaGetCityByName),
		takeLatest('GET_CLIENT_BY_ID_ON_API', sagaGetClientById),
		takeLatest('GET_CLIENT_BY_NAME_ON_API', sagaGetClientByName),
		takeLatest('GET_ALL_CLIENTS_ON_API', sagaGetAllClients),
		takeLatest('GET_ALL_CITY_ON_API', sagaGetAllCity),
		takeLatest('DEL_CITY_ON_API', sagaDelCity),
		takeLatest('DEL_CLIENT_ON_API', sagaDelClient),
		takeLatest('ADD_CLIENT_ON_API', sagaAddClient),
		takeLatest('ADD_CITY_ON_API', sagaAddCity)
	])
} 

