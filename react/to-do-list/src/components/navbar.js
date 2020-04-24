import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="/"><span className="h2" >DO</span>IT</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-danger" href="/">Urgent</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-success" href="/">Normal</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="/">Secondary</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
