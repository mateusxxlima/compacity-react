import React from 'react'

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper #e53935 red darken-1">
                <a href="#/" className="brand-logo">CompassoCity</a>
                <ul className="right">
                    <li><a href="/cidades">Cidades</a></li>
                    <li><a href="/pessoas">Pessoas</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header