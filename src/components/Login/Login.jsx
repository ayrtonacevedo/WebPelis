import s from './Login.css'
import React, { useState } from 'react'
import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const { login, loginWithGoogle } = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await login(user.email, user.password);
            navigate('/home');
        } catch (error) {
            if (error.code === 'auth/user-not-found') {
                setError('User Not Found')
            }
            if (error.code === 'auth/wrong-password') {
                setError('Password Is Incorrect')
            }
            if (error.code === 'auth/invalid-email') {
                setError('Invalid email')
            }

            console.log(error.code)
        }
    }
    const handleGoogleSignIn= async ()=>{
        try {
            // throw new Error('Google error')
            await loginWithGoogle()
            navigate('/profile')
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <div className='login'>
            <div className="container-login">
                {error ? <p className='error-message'>{error}</p> : null}
                <form onSubmit={handleSubmit}>
                    <div className="email">
                        <label htmlFor='email'> Email</label>
                        <input type='email' name='email' placeholder='youremail@company.com' onChange={handleChange} />
                    </div>

                    <div className="password">
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' placeholder='******' id='password' onChange={handleChange} />
                    </div>
                    <div className="button">
                        <button className='button-login'>Login</button>
                    </div>

                </form>
            </div>
            <div className="account-section">
                <label>Don't have an Account</label> <a href="/signUp">Register</a>
            </div>
            <button className='btn-google' onClick={handleGoogleSignIn}>Google Login</button>
                


        </div>
    )
}

export default Login
