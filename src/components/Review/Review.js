import React from "react"
import { ReactDOM } from "react"
import './Review.css';
import { ReactComponent as Star } from '../../svg/star.svg'

export const Review = () => {

    return (
        <div className="review">
            <div>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </div>

            
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus pellentesque nam aliquam. Semper id ipsum pretium id blandit dignissim at volutpat amet. Montes, nunc, blandit eget nisi habitant ipsum, volutpat, in. Sollicitudin eget lobortis aliquam ipsum, purus. Sapien elementum.</p>
                <p>Adnan Sami</p>
        </div>
    )
}