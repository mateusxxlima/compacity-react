import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'

import { Router, Switch, Route } from 'react-router-dom'

import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Client from '../Pages/Client/Client'
import City from '../Pages/City/City'
import NotFound from '../Pages/otherComponents/NotFound'
import Logout from '../Pages/Logout/Logout'
import PrivateRoute from './privateRoute'


import { history } from './history'

const Rotas = () => (

    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path = '/login' exact = { true } component = { Login } />
                <Route path = '/register' exact = { true } component = { Register } />
                <PrivateRoute path = '/' exact = { true } component = { City } />
                <PrivateRoute path = '/client' exact = { true } component = { Client } />
                <PrivateRoute path = '/logout' exact = { true } component = { Logout } />
                <PrivateRoute component = { NotFound } /> 
            </Switch>
        </Router>
    </Provider>

)

export default Rotas