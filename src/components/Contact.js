import React, { useState } from 'react'
import { Footer } from './Footer'
import './contact.css'
// import { Link } from 'react-router-dom'
import { FaClock, FaHome, FaMailBulk, FaPhone } from 'react-icons/fa'
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Regular expressions for email and phone number validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  // Function to handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Perform validation for required fields
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    // Validate email format
    if (formData.email.trim() && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate phone number format
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
    }

    // Update the state with validation errors (if any)
    setErrors(newErrors);

    // Submit the form only if there are no validation errors
    if (Object.keys(newErrors).length === 0) {
      // Perform your logic for submitting the form data here
      console.log(formData);
    }
  };

  return (
    <div>
      <div className='contact-title'><h1>Contact Us</h1></div>
      <div className="contact-info">
              <div className="contact-location">
                <FaHome size={30} style={{color:"rgb(239, 90, 36)",marginRight:"2rem"}}/> 
                <br/>
                    <p style={{color:"black",fontSize:"1.3rem",fontWeight:500}}>C102, Second Floor</p>
                    <p style={{color:"black",fontSize:"1.3rem",fontWeight:500}}>Chennai-600028</p>
              </div>
              <div className="contact-phone">
                <p style={{color:"black",fontSize:"1.3rem",fontWeight:500}}><FaPhone size={28} style={{color:"rgb(239, 90, 36)",marginLeft:"2rem",marginRight:"2rem"}}/><br/>
                 +91 6798445456</p>
              </div>
              <div className="contact-email">
                <p style={{color:"black",fontSize:"1.3rem",fontWeight:500}}><FaMailBulk size={30} style={{color:"rgb(239, 90, 36)",marginRight:"2rem"}}/><br/>
                 appliance@gmail.com</p>
              </div>
              <div className="contact-email">
                <p style={{color:"black",fontSize:"1.3rem",fontWeight:500}}><FaClock size={30} style={{color:"rgb(239, 90, 36)",marginRight:"2rem"}}/><br/>
                 Mon-Sun: 10:00AM-07:00PM</p>
              </div>
           </div>
           <div className='contact_us'>
            <div className='contain'>
              <div>.</div>
      <div className='form'>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
              <div className='input-row'>
                <div className='input-group'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name*'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.name && <span className='error-message'>{errors.name}</span>}
                </div>

                <div className='input-group'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email*'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.email && <span className='error-message'>{errors.email}</span>}
                </div>
                <div className='input-group'>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Phone number*'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  {errors.phone && <span className='error-message'>{errors.phone}</span>}
                </div>
              </div>
              <textarea
                rows={6}
                name='message'
                placeholder='Type your message here'
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              {errors.message && <span className='error-message'>{errors.message}</span>}
              <button type='submit' className='btn'>
                Submit
              </button>
            </form>
      </div></div>
      </div>
      <Footer/>
    </div>
  )
}
