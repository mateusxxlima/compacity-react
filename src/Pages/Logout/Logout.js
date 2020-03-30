import React from 'react'
import './logout.css'
import LinkWrapper from '../../Utils/LinkWrapper'

const Logout = () => (

    <div className="divBodyLogin">
        <div className="container">
            <div className="row logout">
                <div className=" col s10 m6 l6 offset-s1 offset-m3 offset-l3">
                    <div className="card">

                        <div className="card-action red white-text">
                            <h3>Sair</h3>
                        </div>

                        <div className="card-content">                        

                            <div className="form-field">
                                <h4>Realmente deseja sair?</h4>
                            </div>                       

                            <div className="form-field center-align">
                                <button className="btn-large red">
                                    <LinkWrapper to ="/login">
                                        Sim sair
                                    </LinkWrapper></button>
                            </div>

                            <div className="form-field center-align">
                                <button className="btn-large red">
                                    <LinkWrapper to ="/">
                                        Cancelar
                                    </LinkWrapper></button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

)

export default Logout