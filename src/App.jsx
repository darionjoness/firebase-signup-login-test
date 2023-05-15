import { useState } from 'react'
import Signup from './components/Signup'
import { auth, googleProvider } from './config/firebase'
import { signOut, signInWithPopup } from 'firebase/auth'
import Login from './components/Login'


function App() {
  const [viewSignUp, setViewSignUp] = useState(false)
  const [viewLogin, setViewLogin] = useState(false)

  console.log(auth?.currentUser?.email)

  // Create handleSignOut Function
  const handleSignOut = async () => {
    // Sign user out
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  const googleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <button onClick={() => setViewSignUp(true)}>Sign Up</button>

      <button onClick={() => setViewLogin(true)}>Login</button>

      <button onClick={googleSignUp}>Login with google</button>

      <button onClick={handleSignOut}>Logout</button>

      {viewSignUp ? <Signup onClick={() => setViewSignUp(false)} /> : ''}

      {viewLogin ? <Login onClick={() => setViewLogin(false)} /> : ''}
    </div>
  )
}

export default App
