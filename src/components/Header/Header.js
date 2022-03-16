import React from "react"
import { ReactDOM } from "react"
import image from '../../images/logo.png'
import './Header.css'

export const Header = () => {

    return (
        <div className="header">
            <div className="header__logo">
                <img src={image} />
                <span>CryptoMaster</span>
            </div>

            <div className="header__navbar">
                <ul className="header__navbar__ul">
                    <li>
                        <a href="" className="header_a">Market</a>
                    </li>
                    <li>
                        <a href="" className="header_a">Exchange</a>
                    </li>
                    <li>
                        <a href="" className="header_a">Tutorial</a>
                    </li>
                    <li>
                        <a href="" className="header_a">Wallets</a>
                    </li>
                    <li>
                        <a href="" className="header_login">Login</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}