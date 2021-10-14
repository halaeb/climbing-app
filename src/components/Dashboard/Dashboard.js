import React, { useState } from 'react';
import Form from '../Form'
import Climbs from '../Climb/Climbs'
import Users from '../Users/Users'
import './Dashboard.css';

function Dashboard(){

  const[climbList, setClimbList] = useState([]);
  const[userList, setUserList] = useState([]);
  
  
  const addClimb = (climb) => {
    const newClimbList =[climb,...climbList];
    setClimbList(newClimbList);
    /* check if user is in userList. 
    T-update nClimbs. F-addUser*/
    if(userList.some(user => user.username === climb.username)) {
      updateUser(climb.username);
    } else{
      addUser(climb.username);
    };
    
  }

  const addUser = (username) => {
    const user ={username: username, nClimbs:1};
    const newUserList =[...userList, user];
    setUserList(newUserList);
  }

  const updateUser = (username) => {
    const newUserList = [...userList];
    const userIndex = newUserList.findIndex(user => user.username === username);
    newUserList[userIndex].nClimbs = newUserList[userIndex].nClimbs +1;
    setUserList(newUserList);
  }



  const addLike = (climbToUpdate) => {
    const newClimbList = [...climbList];
    const climbIndex = newClimbList.findIndex(climb => climb.id === climbToUpdate.id);
    newClimbList[climbIndex].likes = newClimbList[climbIndex].likes +1;
    setClimbList(newClimbList);
  }

  return (
    <div className='dashboard-container'> 
        <Form onSubmit={addClimb}/>

        <div className='climb-list-container'>
          <h1 className='dash-title'>Recent Climbs</h1>
            <Climbs climbList={climbList} addLike={addLike} />
        </div>
        <div className='climber-list-container'>
          <h1 className='dash-title'>Climbers</h1>
          <Users userList={userList}/>
        </div>
      </div>
      
  )
}
export default Dashboard;
