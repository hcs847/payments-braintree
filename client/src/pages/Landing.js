import React from 'react';

function Landing() {

    return (
        <div className='flex flex-center'>

            <div className="card">
                <p style={{ margin: '1rem', fontWeight: '500' }}>Create an account or Login</p>
                <button style={{ backgroundColor: 'red' }} className='btn'><a href='/auth/google'>Login with Google</a></button>
            </div>


        </div>
    )
}

export default Landing;
