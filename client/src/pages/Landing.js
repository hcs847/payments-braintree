import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {

    return (
        <div className='flex flex-center'>

            <div className="card">
                <p style={{ margin: '1rem' }}>Create an account or login</p>
                <button style={{ backgroundColor: 'red' }} className='btn'><a href='/auth/google'>Login with Google</a></button>
            </div>


        </div>
    )
}

export default Landing;
