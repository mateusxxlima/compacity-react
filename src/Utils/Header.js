import React from 'react'
import LinkWrapper from './LinkWrapper'

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper #e53935 red darken-1">
                <LinkWrapper to = "/" className="brand-logo" activeStyle = {{}} >Compacity</LinkWrapper>
                <ul className="right">
                    <li><LinkWrapper to = "/cidade">Cidades</LinkWrapper></li>
                    <li><LinkWrapper to = "/pessoa">Pessoas</LinkWrapper></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header