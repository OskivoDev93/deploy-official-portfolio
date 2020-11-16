import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="nav-links">
            <Link to='/brain'>
                <l1 style={{fontFamily:'fantasy', fontSize: 'large', color: 'rgba(0, 100, 100, 0.5)'}}>
                    Brain
                </l1>
            </Link>
            <Link to='/contact-info'>
                <li style={{fontFamily:'fantasy', fontSize: 'large', color: 'rgb(12 30 17 / 50%)'}}>
                    Contact & Information
                </li>
            </Link>
            </ul>
        </nav>
    )
}


export default Nav;