import React from 'react';

const Header = () => {

    return (
        <div className='header dark'>

            <h1 className='logo'>Braintree payments Demo</h1>


            <nav className='nav flex flex-between'>
                <ul className='nav-list flex'>
                    <li className='nav-link'>Home</li>
                    <li className='nav-link'>Me</li>
                </ul>
                <ul className='nav-list'>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
