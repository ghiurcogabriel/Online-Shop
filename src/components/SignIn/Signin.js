import React, { Component } from 'react';
import './Signin.scss';
import Button from '../../components/Forms/Button/Button';
import {sigInWithGoogle} from '../../Firebase/Utils';


export default class Signin extends Component {

    handleSubmit = async e => {
        e.preventDefault();
        
    }

    render(){
        return (
        <div className='signin'>
            <div className='wrap'>
                <h2>
                    LogIn
                </h2>

                <div className='formWrap'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='socialSignin'>
                            <div className='row'>
                                <Button onClick={sigInWithGoogle} >
                                    Sign in with Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    }
}
