import React from 'react';

function Landing() {

    return (
        <div className='flex flex-center'>

            <div className="card">
                <div className="card-body">
                    <p>Create an account or Login</p>
                    <button className='btn red'><a href='/auth/google'>Login with Google</a></button>
                </div>
            </div>


        </div>
    )
}

export default Landing;
