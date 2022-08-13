import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Image Gallery | Code Arindam</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Nature</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/IG/Love">Love</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/IG/Animations">Animations</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/IG/People">People</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/IG/Animals">Animals</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/IG/Birds">Birds</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/IG/Flower">Flower</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
