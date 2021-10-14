import React from 'react';
import '../Climb/Climb.css';
import userLogo from './user-logo.svg';
import shoeLogo from './shoe-logo.svg';
import likeIcon from './like-icon.svg';
import starIcon from './star-icon.svg';

const ClimbInstance = (props) => {
    const handleLikeClick =() => {
        props.handleLikeClick(props.climb);
    }

    return (
        <div className='climb-container'> 
        <div className='climb-data-container'>
          <img src={userLogo} className='user-logo' alt='user logo'/>

          <div>
            <div className='climb-data-heading'>
              {props.climb.username}
            </div>
            <div className='climb-data-container'>
              <div className='climb-data-subheading'>
                {props.climb.date} | 
              </div>
              <div className='climb-data-subheading'>
                {props.climb.gym}
              </div>
            </div>
            
          </div>
          
        </div>
        <div className='climb-data-container-2'>
          <img src={shoeLogo} className = 'user-logo' alt='climbing shoe'/>
          <div className='climb-stats-container'>
              <div className='climb-data-subheading'>Climb Type</div>
              <div>{props.climb.climbType}</div>
            </div>
            <div className='climb-stats-container'>
              <div className='climb-data-subheading'>Grade</div>
              <div>{props.climb.grade}</div>
            </div>
            <div className='climb-stats-container'>
              <div className='climb-data-subheading'>Rating</div>
              <div>{props.climb.rating}<img src={starIcon} className='icon' alt='star'/>
              </div>
              
          </div>
          
          
          
          
        </div>

        <div className='button-container'> 
          <h3>{props.climb.likes} Likes</h3>
          <button className='button' onClick={handleLikeClick}> 
            <img src={likeIcon} className='icon' alt='like'/>
          </button>
        </div>
          
        
        
        
        
        
      </div>
    );
        
      
};

export default ClimbInstance;

