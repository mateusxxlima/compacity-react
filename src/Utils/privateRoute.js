import React from 'react'
import { Route, Redirect } from 'react-router'

const isLogged = true

const privateRoute = props => {

    return isLogged ? <Route { ...props } /> : <Redirect to="/login" />

}

export default privateRoute