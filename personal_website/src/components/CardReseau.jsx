import React from 'react'
import githubLogo from '../images/github_logo.png'
import linkedinLogo from '../images/linkedin_logo.png'
import mailLogo from '../images/mail_logo.png'
import '../style/CardReseau.css'

export default function CardReseau() {
    return (
        <div className="card reseau">
           <a href="https://github.com/charlesdecodin"><img src={githubLogo} alt="" className="logo-reseau github-icon"/></a>
           <a href="https://www.linkedin.com/in/charles-d%C3%A9codin-60b0341a8/"><img src={linkedinLogo} alt="" className="logo-reseau linkedin-icon"/></a>
           <img src={mailLogo} alt="" className="logo-reseau mail-icon"/>
        </div>
    )
}
