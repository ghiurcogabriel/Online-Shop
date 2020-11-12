import React from 'react';
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
                <a href=' '>
                    Shop Womens
                </a>
                </div>
                <div
                    className='item'
                    style={{
                    backgroundImage: `url(${men})`
                            }}
                > 
                 <a href=' '>
                    Shop Mens
                </a>
                 </div>
            </div>
        </div>
    )
}

export default Directory;