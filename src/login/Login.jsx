import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
// import { setLoggedInUser } from '../reduxx/actions';
import { Link } from 'react-router-dom';
import { setJwtToken } from '../reduxx/actions';
import axios from 'axios';
import './logi.css';

export const Login = ({ onFormSwitch }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!email) {
      formErrors.email = '*Email is required';
    } else if (!validator.isEmail(email)) {
      formErrors.email = '*Invalid email format';
    }

    if (!password) {
      formErrors.password = '*Password is required';
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const loginData = {
            email,
            password,
        };
        const response = await axios.post('http://localhost:2007/api/v1/auth/login', loginData);
        console.log(response);
        const jwtToken = response.data.token;
        // Store the JWT token in localStorage or Redux state for future authenticated requests.
        // For example, you can use Redux to store the token in the application state.
        // dispatch(setLoggedInUser(jwtToken));
        localStorage.setItem('jwtToken', jwtToken);
        dispatch(setJwtToken(jwtToken));

        console.log(jwtToken);
        window.location.href = '/dashboard';
    } catch (error) {
      if (error.response) {
        // Handle the error response from the backend and set the error message in the state
        setErrors({ loginError: error.response.data });
      } else {
        console.error('Login error:', error.message); // This will log the generic error message
      }
    }
    }
  };

  return (
    <div className="uth-form">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">Log In</button>
      </form>
      {errors.loginError && <div className="error">{errors.loginError}</div>} 
      <Link className="link-btn" to="/register">
        Don't have an account? Register
      </Link>
    </div>
  );
};
