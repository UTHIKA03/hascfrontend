import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setJwtToken, setLoggedInUser } from './reduxx/actions';
import { Navbar } from './navigation/Navbar';
import { Login } from './login/Login';
import { Register } from './login/Register';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { Service } from './components/Service';
import {About} from './components/About'

import './App.css';
import {Review} from './components/Review';
import UserProfile from './login/UserProfile';
import ProductPage from './components/ProductPage';
import Payment from './components/Payment';
import { Dashboard } from './login/Dashboard';

const user = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '123-456-7890',
  userType: 'technician',
  experience: '5 years',
  typeOfService: 'Electrical',
  avatar: 'https://img.freepik.com/free-icon/user_318-159711.jpg', // Replace with the URL of the user's avatar
};

function App() {
  const dispatch = useDispatch();
  const jwtToken = useSelector((state) => state.jwtToken); // Add the jwtToken from the Redux store

  // New useEffect hook to check for the token on page load
  useEffect(() => {
    // Check if the token exists in local storage on page load
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // Set the token in the Redux store using the setJwtToken action
      dispatch(setJwtToken(token));
    }
  }, [dispatch]);
  const loggedInUser = useSelector((state) => state.loggedInUser);

  const handleLogin = (user) => {
    dispatch(setLoggedInUser(user));
  };

  const handleLogout = () => {
    dispatch(setLoggedInUser(null));
  };

  return (
    <Router>
      <div className="App">
        <Navbar loggedInUser={loggedInUser} onLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home user={loggedInUser} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/wetakecareof" element={<Review/>} />
            <Route path='/profile' element={<UserProfile user={user}/>}></Route>
            <Route path='/product' element={<ProductPage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/register"
              element={<Register onRegister={handleLogin} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
