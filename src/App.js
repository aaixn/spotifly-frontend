import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react'
import Playlist from './Components/Playlist/Playlist';
import Form from './Components/Form/Form';
import { app } from './firebase'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState('')
  const [playlist, setPlaylist] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggingIn, setLoggingIn] = useState('')
  const navigate = useNavigate()

  const handleAction = async (action) => {
    setLoggingIn(action)
  }

  useEffect(() => {
    const handleSetUser = async () => {
      const authentication = getAuth()
      if (loggingIn === 'log in') {
        try {
          const response = await signInWithEmailAndPassword(authentication, email, password)
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          const userByEmail = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${email}`)
          setUser(userByEmail.data)
          setLoggingIn(false)
          navigate('/home')
        } catch (err) {
          if (err.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (err.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          }
        }
      }
      if (loggingIn === 'register') {
        try {
          const response = await createUserWithEmailAndPassword(authentication, email, password)
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
          const userByEmail = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${email}`)
          setUser(userByEmail.data)
          setLoggingIn(false)
          navigate('/home')
        } catch (err) {
          if (err.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
          if (err.code === 'auth/weak-password') {
            toast.error('Password must be at least 6 characters long')
          }
        }
      }
    }
    handleSetUser()
  }, [loggingIn])

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    console.log('comp did mount 2, auth token:', authToken)
    if (authToken) {
      navigate('/home')
    }
  }, [])

  // useEffect(() => {
  //   sessionStorage.setItem('user', JSON.stringify(user))
  // }, [user])
  console.log('app:', user)
  return (
    <div className='login'>
      {user && <Nav user={user} setUser={setUser} setEmail={setEmail} />}
      <ToastContainer />
      <Routes>
        <Route path='/login' element={<Form title='Log In' setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction('log in')} />} />
        <Route path='/register' element={<Form title='Register' setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction('register')} />} />
        <Route path='/home' element={<Home setUser={setUser} />} />
        <Route path='/playlist/:id' element={<Playlist user={user} setUser={setUser} playlist={playlist} setPlaylist={setPlaylist} />} />
      </Routes>
    </div>
  );
}

export default App;
