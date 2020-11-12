import React from 'react';
import './index.scss';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/Utils'

const Header = props=> {

    const {currentUser} = props;

    return (
    <header className='title'>
        <div className='wrap'>
            <div className='logo'>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
            </div>

            <div className='callToActions'>

                {currentUser && (
                    <ul>
                        <li>
                            <span style={{cursor: 'pointer'}} onClick={() => auth.signOut()}>LogOut</span>
                        </li>
                    </ul>
                )}

                {!currentUser && (
                <ul>
                    <li>
                        <Link to='/registration'>
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li>
                </ul>
                )}
                
            </div>
        </div>
    </header>
    )
  
}

Header.defaultProps = {
    currentUser: null,
}

export default Header;