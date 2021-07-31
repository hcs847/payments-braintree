import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Landing() {

    return (
        <div className='flex flex-center'>

            <div className="card">
                <p style={{ margin: '1rem' }}>Create an account or login</p>
                <button style={{ backgroundColor: 'red' }} className='btn'>Login with Google<Link to='/auth/google' /></button>
            </div>


        </div>
    )
}

export default Landing;
