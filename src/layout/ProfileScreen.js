import React from 'react';
import './ProfileScreen.css';

const ProfileScreen = () => {
  return (
    <div className="profile-screen">
      <div className="profile-container">
        <h2>Profile</h2>
        <div className="profile-details">
          <div className="profile-item">
            <label>Username:</label>
            <span>JohnDoe</span>
          </div>
          <div className="profile-item">
            <label>Email:</label>
            <span>johndoe@example.com</span>
          </div>
          <div className="profile-item">
            <label>Joined:</label>
            <span>January 1, 2020</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;