import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {

    return (
        <div className='flex flex-center'>

            <div className="card m-top-12">
                <div className="card-body">
                    <p style={{ textAlign: 'center', letterSpacing: '1.5px' }}><Link className='link' to='/signup'>SIGNUP</Link> or <Link className='link' to='/login'>LOGIN</Link></p>
                    <button className='btn red'><a href='/auth/google'>Login with Google</a></button>
                </div>
            </div >


        </div >
    )
}

export default Landing;
