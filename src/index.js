import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Pessoa from './Pages/Pessoa/Pessoa'
import Cidade from './Pages/Cidade/Cidade'
import NotFound from './Utils/NotFound'

ReactDOM.render(

        <BrowserRouter>
            <Switch>
                <Route path = '/' exact = { true } component = { Pessoa } />
                <Route path = '/pessoa' component = { Pessoa } />
                <Route path = '/cidade' component = { Cidade } />
                <Route component = { NotFound } /> 
            </Switch>
        </BrowserRouter>

    , document.getElementById('root'))

serviceWorker.unregister()
