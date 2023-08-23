import React, { useState } from 'react'
import './signUp.css'
import {useAuth} from '../../context/authContext'
import {useNavigate} from 'react-router-dom'


const SignUp = () => {
    const [user, setUser]=useState({
        email:'',
        password:'',
    })
    const {signup} =useAuth()
    const navigate=useNavigate()
    const [error, setError]=useState()

    const handleChange = ({target:{name, value}})=>{
        setUser({...user,[name]:value})
}
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('')
        try {
            await signup(user.email, user.password);
            navigate('/home');
        } catch (error) {
            if(error === 'auth/invalid-email'){
                setError('Invalid Email')
            }
            if(error === 'auth/weak-password'){
                setError('The password must be at least 6 characters')
            }
            if(error=== 'auth/email-already-in-use'){
                setError('The email is already in use')
            }
            
            console.log(error)
        }
    }
  return (
    <div className='signUp'>
        <div className="container-signUp">
        {error ? <p className='error-messagee'>{error}</p> :null}
            <form onSubmit={handleSubmit}>
            <div className="email">
                <label htmlFor='email'> Email</label>
                <input type='email' name='email' placeholder='youremail@company.com' onChange={handleChange}/>
            </div>

            <div className="password">
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' placeholder='******' id='password' onChange={handleChange}/>
            </div>
            <div className="button">
                <button className='button-signUp'>Sign Up</button>
            </div>

            </form>
            <a href='/login'>Sign In</a>


        </div>

        
    </div>
  )
}

export default SignUp