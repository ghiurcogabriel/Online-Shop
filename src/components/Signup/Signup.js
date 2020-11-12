import React, { Component } from 'react';
import './Signup.scss';

import FormInput from '../Forms/FormInput/FormInput';
import Button from '../Forms/Button/Button';

const initialState ={
    displayName: '',
    email: '',
    password: '',
    cosfirmPassword: ''
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

    render() {
        const {displayName, email, password, cosfirmPassword} = this.state;

        return (
            <div className='signup'>
                <div className='wrap'>
                    <h2>Signup</h2>


                <div className="formWrap">
                    <form>
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
                            name="cosfirmPassword"
                            value={cosfirmPassword}
                            placeholder='Confirm Password'
                            onChange={this.handleChange}
                        />

                        <Button type="submit">
                            Register
                        </Button>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
