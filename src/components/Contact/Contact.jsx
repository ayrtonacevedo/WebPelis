import React from 'react';
import s from './Contact.css'
const Contact = () => {
  return (
    <div className='todo'>
      <form className='contact-container'>
        <h2>Contact Us</h2>
        <input type='text' placeholder='Your Name'/>
        <input type='email' id='email' placeholder='Email'/>
        <input type='tel' placeholder='Phone'/>
        <textarea name='' id='' rows='7' placeholder='Message'>
        </textarea>
        <button>Send Message</button>
        <i className='fa-solid fa-paper-plane'></i>
        </form>
   
     




    </div>
  );
}

export default Contact;