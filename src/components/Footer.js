import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSquareXTwitter, faSquareFacebook} from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
    return(
        <div className="footer">
            <a href="https://twitter.com/gbemi_stargazer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faSquareXTwitter} className="icon" /> </a>
            <a href="https://web.facebook.com/yoloye.gbemi" target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faSquareFacebook} className="icon" /> </a>
        </div>
    )
}