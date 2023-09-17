import React, { useState } from 'react';
import validator from 'validator';
// import { useDispatch } from 'react-redux';
// import { setLoggedInUser } from '../reduxx/actions';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './logi.css';
import { Link } from 'react-router-dom';

export const Register = ({ onFormSwitch }) => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // New state for phone number
  const [errors, setErrors] = useState({});
  const [userType, setUserType] = useState('customer'); // Default to 'customer'
  const [experience, setExperience] = useState('');
  const [typeOfService, setTypeOfService] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');


  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = '*Email is required';
    } else if (!validator.isEmail(email)) {
      formErrors.email = '*Invalid email format';
    }

    if (!password) {
      formErrors.password = '*Password is required';
    } else if (password.length < 8) {
      formErrors.password = '*Password should be at least 8 characters long';
    } else if (
      !validator.matches(
        password,
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      )
    ) {
      formErrors.password =
        '*Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character';
    }

    if (!name) {
      formErrors.name = '*Name is required';
    } else if (!validator.matches(name, /^[a-zA-Z\s]+$/)) {
      formErrors.name = '*Name can only contain letters and spaces';
    } else if (name.length < 3 || name.length > 50) {
      formErrors.name = '*Name should be between 3 and 50 characters';
    }

    if (!phoneNumber) {
      formErrors.phoneNumber = '*Phone number is required'; // Validation for phone number
    } else if (!validator.isMobilePhone(phoneNumber)) {
      formErrors.phoneNumber = '*Invalid phone number format'; // Validation for phone number
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log(email);
  //     dispatch(setLoggedInUser(email));
  //     window.location.href = '/login';
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const registrationData = {
          name,
          email,
          password,
          phone: phoneNumber,
          userType,
        };

        if (userType === 'technician') {
          registrationData.experience = experience;
          registrationData.typeOfService = typeOfService;
        }

        const response = await axios.post('http://localhost:2007/api/v1/auth/register', registrationData);
        
        
        setRegistrationStatus(response.data);
        
        setEmail('');
        setPassword('');
        setName('');
        setPhoneNumber('');
        setUserType('customer');
        setExperience('');
        setTypeOfService('');
        setErrors({});
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  };
  
  return (
    <div>
       <div style={{textAlign:"center",backgroundColor:"lightGreen",marginBottom:"2rem"}}>{registrationStatus}</div>
    <div className="uth-form">
      <h2>Create Account</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter full name"
          id="name"
          name="name"
        />
        {errors.name && <div className="error">{errors.name}</div>}
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email id"
          id="email"
          name="email"
          />
        {errors.email && <div className="error">{errors.email}</div>}
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter password"
          id="password"
          name="password"
          />
        {errors.password && <div className="error">{errors.password}</div>}
        <label htmlFor="phoneNumber">Phone Number</label> {/* Phone number field */}
        <input
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="tel"
          placeholder="Enter phone number"
          id="phoneNumber"
          name="phoneNumber"
          />
        {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
        <div>
  <input
    type="radio"
    value="customer"
    name="user"
    checked={userType === 'customer'}
    onChange={() => setUserType('customer')}
    />{' '}
  Customer
  <input
    style={{ marginLeft: '1rem' }}
    type="radio"
    value="technician"
    name="user"
    checked={userType === 'technician'}
    onChange={() => setUserType('technician')}
    />{' '}
  Technician
</div>
{userType === 'technician' && (
  <>
    <label htmlFor="experience">Experience</label>
    <input
      value={experience}
      onChange={(e) => setExperience(e.target.value)}
      type="text"
      placeholder="Enter your experience"
      id="experience"
      name="experience"
      />
  </>
)}

{/* Type of service field (conditionally rendered for technician) */}
{userType === 'technician' && (
  <>
    <label htmlFor="typeOfService">Type of Service</label>
    <input
      value={typeOfService}
      onChange={(e) => setTypeOfService(e.target.value)}
      type="text"
      placeholder="Enter your type of service"
      id="typeOfService"
      name="typeOfService"
      />
  </>
)}
      <button type="submit">Create</button>
      </form>
      <Link className="link-btn" to="/login">
        Have an account? Login
      </Link>
    </div>
    </div>
  );
};
