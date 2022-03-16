import React from "react"
import { ReactDOM } from "react"
import './Card.css'
// import {ReactComponent as RectangleIcon} from '../../..//.././../.react.svg'

export const Card = ({ svgFile, title, about }) => {

    return (
        <div className="card">
            <div className='card__image'>
                {svgFile}
            </div>
            <p className="card_title">{title}</p>
            <p className="card_about">{about}</p>
            
        </div>
    )
}