import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });

    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('http://localhost:3000/api/login', formState);
        const { token } = res.data;

        // save token to local storage
        localStorage.setItem('jwtToken', token);

        // set token to auth header and redirect to homepage
        setAuthToken(token);
    }

    return (
        <div className='login-join-background m-top-12'>
            <h2 className='form-title center'>Login to your account</h2>
            <form className='login-join-form' onSubmit={handleFormSubmit}>
                <div className='flex flex-between'>
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder='youremail@email.com'
                        name='email'
                        id='email'
                        type="email"
                        onChange={handleChange} />
                </div>
                <div className="flex-between flex">
                    <label htmlFor='pwd'>Password</label>
                    <input
                        value={formState.password}
                        placeholder='******'
                        name='password'
                        type='password'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button className='btn center' type='submit'>Submit</button>
                </div>
            </form>
            <div className="flex flex-center">
                No user yet?
                <span className='link'><Link to='/signup'>Sign Up</Link></span>
            </div>
        </div>
    )
}

export default Login
