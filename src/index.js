import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Client from './Pages/Client/Client'
import City from './Pages/City/City'
import NotFound from './Utils/NotFound'

ReactDOM.render(

        <BrowserRouter>
            <Switch>
                <Route path = '/' exact = { true } component = { Client } />
                <Route path = '/client' component = { Client } />
                <Route path = '/city' component = { City } />
                <Route component = { NotFound } /> 
            </Switch>
        </BrowserRouter>

    , document.getElementById('root'))

serviceWorker.unregister()
