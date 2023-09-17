import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const request = () => {
  return (
    <div>
        <section className='fome'>
            <div className='form-con'>
                <div className='form_close'><FaTimes/></div>
                
                <div className='form login_form'>
          <form action='#'>
             <h2>Contact</h2>
            <div className='input-row'>
              <div className='input-group'>
            <input type='text' placeholder='Your Name*'></input></div>
            
            <div className='input-group'>
            <input type='email' placeholder='Email*'></input></div>
            <div className='input-group'>
            <input type='tel' placeholder='Phone number*'></input></div>
            
            </div>
            <textarea rows={6} placeholder="Type your message here"/>
            <Link to='/'>
            
            <button className='btn'>Submit</button>
          </Link>
           
          </form>
          </div>
          </div>
      </section>
    </div>
  )
}
