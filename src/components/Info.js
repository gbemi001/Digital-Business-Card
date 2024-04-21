import React from "react"
import oluwagbemi_yoloye from "./Image/oluwagbemi_yoloye.jpg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLinkedin, faSquareGithub} from "@fortawesome/free-brands-svg-icons"

export default function Info() {
    return(
        <div className="info-container">
            <img src={oluwagbemi_yoloye} alt="Oluwagbemi Yoloye" />
            <h3>Oluwagbemi Yoloye</h3>
            <p>Frontend Developer</p>
            <small>yoloyegbemi@gmail.com</small>
            <div className="social-links">
                <a href="https://github.com/gbemi001" target="_blank" rel="noreferrer" className="github-link">
                <FontAwesomeIcon icon={faSquareGithub} className="github-icon"/>
                GitHub
                </a>
                <a href="https://www.linkedin.com/in/oluwagbemi-yoloye-539a49aa/" target="_blank" rel="noreferrer" className="linkedin-link">
                <FontAwesomeIcon icon={faLinkedin} className="linkedin-icon"/>
                LinkedIn
                </a>
            </div>
        </div>
    )
}