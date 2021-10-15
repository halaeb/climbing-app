import React from 'react';
import './Climb.css';
import ClimbInstance from '../ClimbInstance/ClimbInstance';



const Climbs = (props) => {

    const addLike = (climbToUpdate) => {
      props.addLike(climbToUpdate);
    }

    const deleteClimb = (climbToDelete) => {
      props.deleteClimb(climbToDelete);
    }

    return props.climbList.map((climb, index) => (
      <ClimbInstance climb={climb} handleLikeClick={addLike} handleDeleteClick={deleteClimb}/>
        
      ));
        
      
};

export default Climbs;