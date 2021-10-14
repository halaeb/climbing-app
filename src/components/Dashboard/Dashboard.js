import React, { useState, setState } from 'react';
import Form from '../Form'
import Climb from '../Climb/Climb'
import './Dashboard.css';

function Dashboard(){

  const[climbList, setClimbList] = useState([]);

  const addClimb = (climb) => {
    const newClimbList =[climb, ...climbList];
    setClimbList(newClimbList);
  }
  return (
    <div className='dashboard-container'> 
        <Form onSubmit={addClimb}/>

        <div className='climb-list-container'>
          <h1 className='dash-title'>Recent Climbs</h1>
            <Climb climbList={climbList}/>
            
          
          
        </div>
      </div>
      
  )
}
export default Dashboard;
