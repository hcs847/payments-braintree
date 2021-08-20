import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Signup = () => {
    const [userState, setUserState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        passeord: ''
    });
    const handleChange = e => {
        const { name, value } = e.target;
        setUserState({
            ...userState,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:3000/api/users/create', userState);
        console.log(await res.data);
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
                        type="password"
                        id='pwd'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button className='btn' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
