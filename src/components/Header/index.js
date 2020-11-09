import React from 'react';
import './index.scss';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = props=> {
    return (
    <header className='title'>
        <div className='wrap'>
            <div className='logo'>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
            </div>

            <div className='callToActions'>
                <ul>
                    <li>
                        <Link to='/registration'>
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    )
  
}

export default Header;