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
                setError('Correo Invalido')
            }
            if(error === 'auth/weak-password'){
                setError('La contraseña debe tener al menos 6 caracteres')
            }
            if(error=== 'auth/email-already-in-use'){
                setError('El email ya esta en uso')
            }
            
            console.log(error)
        }
    }
  return (
    <div className='signUp'>
        <div className="container-signUp">
        {error ? <p>{error}</p> :null}
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
            <a href='/login'>Login</a>


        </div>

        
    </div>
  )
}

export default SignUp