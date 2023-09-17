import React from 'react';
import './user.css';
import { FaEdit } from 'react-icons/fa';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile">
      <div className="user-avatar">
        <img src={user.avatar} alt="User Avatar" />
      </div>
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>User Type: {user.userType}</p>
        {user.userType === 'technician' && (
          <>
            <p style={{margin: "5px 0", color: "#666"}}>Experience: {user.experience}</p>
            <p style={{margin: "5px 0", color: "#666"}}>Type of Service: {user.typeOfService}</p>
          </>
        )}
        <button style={{paddingLeft:"3rem",paddingRight:"3rem",marginLeft:"2rem",marginTop:"3rem"}}>
        <FaEdit style={{ marginRight: '0.5rem' }} />Edit</button>
      </div>
    </div>
  );
};

export default UserProfile;
