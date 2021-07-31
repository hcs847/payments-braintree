import React from 'react';
import { Link } from 'react-router-dom';



const Profile = ({ me }) => {
    return (
        <>
            <div className="profile card">
                <div className="card-title flex flex-left">
                    <h3 className='title'>
                        My Profile
                    </h3>
                </div>
                {me && (
                    <ul className='my-profile'>
                        <li> <Link className='link' to='/profile'>{me.firstName} {me.lastName}</Link></li>
                        <li>{me.email}</li>
                    </ul>
                )
                }
            </div>
        </>

    )
}

export default Profile;
