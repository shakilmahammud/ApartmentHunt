import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/Logo.png'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-3 mb-2">
            <div className="container">
                <a className="navbar-brand" href="#"><img className="img-fluid" style={{ height: '70px' }} src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link mr-3 font-weight-bold" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3 font-weight-bold" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3 font-weight-bold" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3 font-weight-bold" href="#">Concems</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3 font-weight-bold" href="#">Event</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-3 font-weight-bold" href="#">Contact</a>
                        </li>
                        <Link to="/"><button style={{ cursor: 'pointer', backgroundColor: '#275a53' }} className="btn text-white">Login</button></Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;