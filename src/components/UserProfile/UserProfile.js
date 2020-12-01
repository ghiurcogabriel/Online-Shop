import React from 'react';
import './UserProfile.scss';
import user from './../../assets/user.png';

const UserProfile = props => {
  const { currentUser } = props;
  const { displayName } = currentUser;

  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <img src={user} alt='user-profile'/>
          </div>
        </li>
        <li>
          <span className="displayName">
            {displayName && displayName}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;