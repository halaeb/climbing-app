import React from 'react';
import './Climb.css';
import ClimbInstance from '../ClimbInstance/ClimbInstance';



const Climbs = (props) => {

    const addLike = (climbToUpdate) => {
      props.addLike(climbToUpdate);
    }

    return props.climbList.map((climb, index) => (
      <ClimbInstance climb={climb} handleLikeClick={addLike} />
        
      ));
        
      
};

export default Climbs;