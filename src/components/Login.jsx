import React, {useState} from 'react'
import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = ({ onClick }) => {
    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    console.log(auth?.currentUser?.email)

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, emailInput, passwordInput)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='login'>
        <div className="loginItems">
            <div className="loginEmail">
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' placeholder='Email...' value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
            </div>
            <div className="loginPassword">
                <label htmlFor="password">Password:</label>
                <input type="password" name='password' placeholder='Password...' value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
            </div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={onClick}>Close</button>
        </div>
    </div>
  )
}

export default Login