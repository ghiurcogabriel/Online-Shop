import React, { Component } from 'react';
import './Signup.scss';
import {auth, handleUserProfile} from '../../Firebase/Utils';

import AutoWrapper from '../AuthWrapper/AuthWrapper'
import FormInput from '../Forms/FormInput/FormInput';
import Button from '../Forms/Button/Button';

const initialState ={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: []
}

export default class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ...initialState
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            const err = ['Password don\'t match'];
            this.setState({
                errors: err
            });
            return
        }

        try {

           const {user} = await auth.createUserWithEmailAndPassword(email, password);

           await handleUserProfile(user, {displayName});

           this.setState({
               ...initialState
           });

        } catch(err){
            // console.log(err)
        }
    }

    render() {
        const {displayName, email, password, confirmPassword, errors} = this.state;

        const configSignupWrapper = {
            headline: 'Signup'
        }

        return (
            <AutoWrapper {...configSignupWrapper}>
                <div className="formWrap">
                    <form onSubmit={this.handleFormSubmit}>
                        <FormInput 
                            type='text'
                            name="displayName"
                            value={displayName}
                            placeholder='Enter full name'
                            onChange={this.handleChange}
                        />

                        <FormInput 
                            type='email'
                            name="email"
                            value={email}
                            placeholder='Your Email'
                            onChange={this.handleChange}
                        />
                        <FormInput 
                            type='password'
                            name="password"
                            value={password}
                            placeholder='Password'
                            onChange={this.handleChange}
                        />
                        <FormInput 
                            type='password'
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder='Confirm Password'
                            onChange={this.handleChange}
                        />

                        {errors.length > 0 && (
                            <ul>
                                {errors.map((err, index) =>{
                                    return(
                                        <li key={index}>
                                            {err}
                                        </li>
                                    )
                                })}
                            </ul>
                        )}

                        <Button type="submit">
                            Register
                        </Button>
                    </form>
                </div>
            </AutoWrapper>
        )
    }
}
