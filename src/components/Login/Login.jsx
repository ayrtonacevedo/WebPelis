import s from './Login.css'
import React, { useState } from 'react'
import {useAuth} from '../../context/authContext'
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const [user, setUser]=useState({
        email:'',
        password:'',
    })
    const {login} =useAuth()
    const navigate=useNavigate()
    const [error, setError]=useState()

    const handleChange = ({target:{name, value}})=>{
        setUser({...user,[name]:value})
}
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('')
        try {
            await login(user.email, user.password);
            navigate('/home');
        } catch (error) {
            // if(error === 'auth/invalid-email'){
            //     setError('Correo Invalido')
            // }
            // if(error === 'auth/weak-password'){
            //     setError('La contraseña debe tener al menos 6 caracteres')
            // }
            // if(error=== 'auth/email-already-in-use'){
            //     setError('El email ya esta en uso')
            // }
            
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
                <button className='button-signUp'>Login</button>
               

            </div>

            </form>
            <a href='/signUp'>Sign Up</a>


        </div>

        
    </div>
  )
}

export default Login
