import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export const Dashboard = () => {
  const jwtToken = useSelector((state) => state.jwtToken);
  console.log('dashboard', jwtToken);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:2007/api/v1/auth/profile', {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
  
      // Handle the response data
      setUserData(response.data);
      setLoading(false);
    } catch (error) {
      // Handle error
      setLoading(false);
      console.error('Error fetching data:', error);
    }
  };
  

  const updateUserProfile = async (userData) => {
    try {
      const response = await axios.post('http://localhost:2007/api/v1/auth/update-profile', userData, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      });
  
      // Handle the response data
      console.log('Profile update status:', response.data);
      setUpdateSuccess(true);
      setUpdateError(null);
    } catch (error) {
      // Handle error
      console.error('Error updating profile:', error);
      setUpdateError('Error updating profile. Please try again.');
    }
  };
  

  useEffect(() => {
    // Fetch profile data when the component mounts or when the token changes
    fetchUserProfile();
  }, [jwtToken]); // Add jwtToken as a dependency

  return (
    <div style={{textAlign:"center"}}>
      <h1>Welcome to the Dashboard!</h1>
      {loading ? (
        <p style={{color:"blue"}}>Loading user data...</p>
      ) : userData ? (
        <div>
          <img style={{height:"9rem",marginBottom:"2rem",borderRadius:"70px"}} src='https://e7.pngegg.com/pngimages/122/453/png-clipart-computer-icons-user-profile-avatar-female-profile-heroes-head-thumbnail.png' alt='profile'></img>
          <h2 style={{marginBottom:"1rem"}}>User Profile</h2>
          <p style={{color:"black",marginBottom:"1rem"}}>Name: Thariga{userData.name}</p>
          <p style={{color:"black",marginBottom:"1rem"}}>Email: thari@gmail.com{userData.email}</p>
          <p style={{color:"black",marginBottom:"1rem"}}>Phone: 8346576280{userData.phone}</p>
          {/* Display other profile data here */}
        </div>
      ) : (
        <p style={{color:"black"}}>User data not available.</p>
      )}

      {/* Display success message if profile update was successful */}
      {updateSuccess && <p>Profile updated successfully!</p>}

      {/* Display error message if profile update failed */}
      {updateError && <p>{updateError}</p>}

      {/* Add a form for updating profile data */}
      {/* <h2>Update Profile</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateUserProfile(userData);
        }}
      >
        <label>
          Name:
          <input
            type="text"
            value={userData ? userData.name : ''}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            value={userData ? userData.phone : ''}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          />
        </label>
        {/* Add other profile fields as needed */}
        {/* <button type="submit">Update Profile</button> */}
      {/* </form> */} 
    </div>
  );
};
