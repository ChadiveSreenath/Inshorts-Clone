import React from 'react'
import "./Footer.css"


const Footer = () => {
    return (
        <div className='footer'>

            <span className='name'>
                Inshorts Clone made by - {" "} <a href="https://www.linkedin.com/in/sreenath-chadive-542762192/">Chadive Sreenath </a>
            </span>

            <hr style={{ width: "90%" }} />

            <div className="iconContainer">
                     {/* eslint-disable-next-line */}
                <a href="https://www.instagram.com/sreenath_s6/" target="_blank">
                    <i className="fab fa-instagram-square fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/sreenath-chadive-542762192/" target="__blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://github.com/ChadiveSreenath" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-link fa-2x"></i>
                </a>
            </div>

        </div>
    )
}

export default Footer