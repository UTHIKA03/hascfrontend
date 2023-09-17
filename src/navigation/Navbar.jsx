import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaBars, FaTimes,FaUser } from 'react-icons/fa';
import { setLoggedInUser, toggleLoginForm } from '../reduxx/actions';
import './nav.css';


export const Navbar = ({ loggedInUser, onFormSwitch, onLogout }) => {
  // const imagePath = process.env.PUBLIC_URL + '/homelogo.png';
  const isLoginFormOpen = useSelector((state) => state.isLoginFormOpen);
  const dispatch = useDispatch();

  const showNavBar = () => {
    dispatch(setLoggedInUser());
  };

  const toggleForm = () => {
    dispatch(toggleLoginForm());
  };
  
  return (
    <header>
        <a href='/'>
        <img
        src="https://clipart-library.com/images/LcdjGnExi.png"
        alt="logo"
        className="logo"
      />
      </a>
      <nav className={isLoginFormOpen ? 'responsive_nav' : ''}>
      
        <NavLink exact to="/" activeClassName="active" onClick={toggleForm}>
          Home
        </NavLink>
        <NavLink to="/services" activeClassName="active" onClick={toggleForm}>
          Service
        </NavLink>
        <NavLink to="/product" activeClassName="active" onClick={toggleForm}>
          Product
        </NavLink>
        <NavLink to="/about" activeClassName="active" onClick={toggleForm}>
          AboutUs
        </NavLink>
        <NavLink exact to="/wetakecareof" activeClassName="active" onClick={toggleForm}>
          Review
        </NavLink>
        <NavLink to="/contact" activeClassName="active" onClick={toggleForm}>
          Contact
        </NavLink>
        {loggedInUser ? (
          <>
            <Link to="/" onClick={onLogout}>
              Logout
            </Link>
            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" activeClassName="active" onClick={toggleForm}>
            Login
              
            </NavLink>
            
            <button className="nav-btn nav-close-btn" onClick={toggleForm}>
              <FaTimes />
            </button>
          </>
        )}
        
        <NavLink to="/dashboard" activeclassname="active" onClick={toggleForm}>
          <FaUser style={{color:"white",fontSize:"1.6rem",marginLeft:"-30px",borderRadius:"50px",marginTop:"15px"}} onClick={toggleForm}/>
        </NavLink>
      </nav>
      <button className="nav-btn" onClick={toggleForm}>
        <FaBars />
      </button>
          
    </header>
  );
};
