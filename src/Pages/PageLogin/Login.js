import React, { Component } from 'react'

import Footer from './components/Footer'
import Body from './components/Body'
import Header from './components/Header'

class Login extends Component {
    render() {
        return (
            <>
                <Header />
                <Body />
                <Footer />
            </>
        )
    }
}

export default Login