import React, {useState} from 'react'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Signup = ({ onClick }) => {

    const [emailInput, setEmailInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    console.log(auth?.currentUser?.email)

    // Sign up function
    const handleSignup = async () => {
        // Register user
        try {  
            await createUserWithEmailAndPassword(auth, emailInput, passwordInput)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className='signup'>
        <div className="signupItems">
            <div className="signupField signupEmail">
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder='Email...' name='email' value={emailInput} onChange={(e) => setEmailInput(e.target.value) } />
            </div>
            <div className="signupField signupPassword">
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder='Password...' name='email' value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
            </div>
            <button onClick={handleSignup}>Register</button>
            <button onClick={onClick} >Close</button>
        </div>
    </div>
  )
}

export default Signup