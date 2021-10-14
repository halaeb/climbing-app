import React, { useState } from 'react';
import './Climb.css';


const Climb = ({climbList}) => {
    
    return climbList.map((climb, index) => (
      <div className='climb-container'> 
        <div className='climb-data'>
          {climb.gym}
        </div>
        <div className='climb-data'>
          {climb.climbType}
        </div>
        <div className='climb-data'>
          {climb.grade}
        </div>
        <div className='climb-data'>
          {climb.rating}
        </div>
      </div>
        
      ));
        
        
      
};

export default Climb;