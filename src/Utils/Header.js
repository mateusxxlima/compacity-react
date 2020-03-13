import React from 'react'
import LinkWrapper from './LinkWrapper'
import './header.css'

const Header = () => {
    return (
        <div className="navbar-fixed auto">
        <nav>
            <div className="nav-wrapper #e53935 red darken-1">
                <LinkWrapper to = "/" className="brand-logo" activeStyle = {{}} >Compacity</LinkWrapper>
                <ul className="right">
                    <li><LinkWrapper to = "/city">Cidades</LinkWrapper></li>
                    <li><LinkWrapper to = "/client">Clientes</LinkWrapper></li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Header