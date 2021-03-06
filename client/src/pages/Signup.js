import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';


const Signup = () => {
    const [userState, setUserState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserState({
            ...userState,
            [name]: value
        })
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const res = await axios.post('/api/users/signup', userState);
        const { token } = res.data;
        // set token to local storage
        localStorage.setItem('jwtToken', token);

        // set token to auth header
        setAuthToken(token);

        // decode token to get user data
        const decoded = jwt_decode(token);
    }

    return (
        <div className='login-join-background'>
            <h2 className='form-title center'>Signup</h2>
            <form className='form-login-join' onSubmit={handleFormSubmit}>
                <div className='flex flex-between'>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        value={userState.firstName}
                        placeholder='First name'
                        name='firstName'
                        type="text"
                        id='firstName'
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-between'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        value={userState.lastName}
                        placeholder='Last name'
                        name='lastName'
                        type="text"
                        id='lastName'
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-between'>
                    <label htmlFor="email">Email:</label>
                    <input
                        value={userState.email}
                        placeholder='youremail@email.com'
                        name='email'
                        type="email"
                        id='email'
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-between'>
                    <label htmlFor="pwd">Password:</label>
                    <input
                        value={userState.password}
                        placeholder='******'
                        name='password'
                        type='password'
                        id='pwd'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button className='btn' type='submit'>Submit</button>
                </div>
            </form>
            <div className="flex flex-center">
                <p>Already have an account? <span className='link'><Link to='/login'>Login</Link></span></p>
            </div>
        </div>
    )
}

export default Signup
