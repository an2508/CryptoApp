import React from "react"
import { ReactDOM } from "react"
import './Navbar.css';

export const Navbar = () => {

    return (
        <div className="navbar">
        <ul className="navbar__ul">
            <li>
                <a href="" className="navbar_a">All</a>
            </li>
            <li>
                <a href="" className="navbar_a">Exchange</a>
            </li>
            <li>
                <a href="" className="navbar_a">Donation</a>
            </li>
            <li>
                <a href="" className="navbar_a">Token</a>
            </li>
           
        </ul>
    </div>
    )
}