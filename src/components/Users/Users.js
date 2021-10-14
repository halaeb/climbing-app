import React from 'react';
import './Users.css';
import UserInstance from './UserInstance';



const Users = (props) => {


    return props.userList.map((user, index) => (
      <UserInstance user={user}/>
        
      ));
        
      
};

export default Users;