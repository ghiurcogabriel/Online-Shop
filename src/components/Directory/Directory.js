import React from 'react';
import { Link } from 'react-router-dom';
import './Directory.scss';
import men from '../../assets/mens.jpg';
import woman from '../../assets/woman.jpg';

const Directory = props => {
    return(
        <div className='directory'>
            <div className='wrap'>
                <div
                 className='item'
                    style={{
                        backgroundImage: `url(${woman})`
                            }}
                > 
                <Link to='/search/womens'>
                    Shop Womens
                </Link>
                </div>
                <div
                    className='item'
                    style={{
                    backgroundImage: `url(${men})`
                    }}
                > 
                 <Link to='/search/mens'>
                    Shop Mens
                </Link>
                 </div>
            </div>
        </div>
    )
}

export default Directory;