import React from 'react';
import './Users.css';



const UserInstance = (props) => {
    return (
        <div className='user-instance-container'>
            <div>
                <div className='user-data-subheading'>Username</div>
                <div>{props.user.username}</div>
            </div>
            <div>
                <div className='user-data-subheading'>Number of Climbs</div>
                <div>{props.user.nClimbs}</div>
            </div> 
        </div>
    );
};

export default UserInstance;