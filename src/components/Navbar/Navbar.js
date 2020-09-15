import React from 'react';
import './Navbar.css'
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand">
                    <Link to='/'>
                        <img src={logo} alt="" width='20%' />
                    </Link>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" id='icon' href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" id='login' href="#">Login</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;