import React from 'react';
import s from './Contact.css'
import emailjs from '@emailjs/browser'
import {useNavigate} from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate()
  const form =document.getElementById('form')
  const sendEmail=(event)=>{
    event.preventDefault();
    emailjs.sendForm('service_i9fl2jc','template_gk2papw',event.target,'zcY076_xrgkXPUPYX')
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    alert('Mensaje enviado')
    navigate('/home');
  }
  return (
    <div className='todo'>
      <form   id='form' onSubmit={sendEmail} className='contact-container'>
        <h2>Contact Us</h2>
        <input type='text' placeholder='Your Name' name="user_name"/>
        <input type='email' id='email' placeholder='Email' name="user_email"/>
        {/* <input type='tel' placeholder='Phone'/> */}
        <textarea name='user_message' id='' rows='7' placeholder='Message'>
        </textarea>
        <button>Send Message</button>
        <i className='fa-solid fa-paper-plane'></i>
        </form>
   
     




    </div>
  );
}

export default Contact;