import { createContext, useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup, 
    sendPasswordResetEmail
} from 'firebase/auth'
import { auth } from '../firebase'


export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('There is not auth provider')
    return context
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    const signup = async (email, password) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error.code)
        }

    }

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const signout = () => signOut(auth)

    const loginWithGoogle=()=>{
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword=(email)=>{
        sendPasswordResetEmail(auth,email)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
        })
    }, [])

    return <authContext.Provider value={{ signup, login, user, signout, loginWithGoogle, resetPassword }}>{children}</authContext.Provider>
}