import React from "react";

function Navbar() {
    return (
        <div className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                            <a className="navbar-brand text-white" href="#">Start Booststrap</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link text-white">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link text-white-50">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white-50">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white-50">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;