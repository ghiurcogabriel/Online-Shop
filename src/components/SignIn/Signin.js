import React, { Component } from 'react';
import './Signin.scss';
import Button from '../../components/Forms/Button/Button';
import {sigInWithGoogle, auth} from '../../Firebase/Utils';
import { Link} from 'react-router-dom'

import AuthWrapper from '../AuthWrapper/AuthWrapper'
import FormInput from '../Forms/FormInput/FormInput';


const initialState = {
    email:'',
    password: ''
};

export default class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);
            this.state({
                ...initialState
            })

        } catch(err){
            console.log(err);
        }
    }

    render(){
        const {email, password} = this.state;

        const configAuthWrapper = {
            headline: 'Login'
        }

        return (
        <AuthWrapper {...configAuthWrapper}>
                <div className='formWrap'>
                    <form onSubmit={this.handleSubmit}>

                        <FormInput 
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Email'
                            handleChange={this.handleChange}
                        />
                        <FormInput 
                            type='password'
                            name='password'
                            value={password}
                            placeholder='Password'
                            handleChange={this.handleChange}
                        />

                        <Button type='submit'>
                            LogIn
                        </Button>

                        <div className='socialSignin'>
                            <div className='row'>
                                <Button onClick={sigInWithGoogle} >
                                    Sign in with Google
                                </Button>
                            </div>
                        </div>
                        <div className='links'>
                            <Link to='/recovery'>
                                Reset Password
                            </Link>
                        </div>
                    </form>
                </div>
        </AuthWrapper>
    )
    }
}
