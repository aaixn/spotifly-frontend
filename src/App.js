import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import { useEffect, useState } from 'react'
import Playlist from './Components/Playlist/Playlist';
import Login from './Components/Login/Login';
import { app } from './firebase-config'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { DialogTitle } from '@mui/material';

function App() {
  const [user, setUser] = useState('')
  const [playlist, setPlaylist] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggingIn, setLoggingIn] = useState('')
  const navigate = useNavigate()

  const handleLogin = (action) => {
    setLoggingIn(action)
  }

  useEffect(() => {
    const handleSetUser = async () => {
      const authentication = getAuth()
      let response
      if (loggingIn === 'log in') {
        try {
          response = await signInWithEmailAndPassword(authentication, email, password)
        } catch (err) {
          switch (err.code) {
            case 'auth/wrong-password': {
              toast.error('Please check the Password')
              break
            }
            case 'auth/user-not-found': {
              toast.error('Please check the Email')
              break
            }
            case 'auth/too-many-requests': toast.error('Whoa there, settle down with the login attempts! Try again in a minute')
          }
          setLoggingIn(false)
          return
        }
      }
      if (loggingIn === 'register') {
        try {
          response = await createUserWithEmailAndPassword(authentication, email, password)
        } catch (err) {
          switch (err.code) {
            case 'auth/invalid-email': {
              toast.error('Enter a valid email address')
              break
            }
            case 'auth/email-already-in-use': {
              toast.error('Email Already in Use')
              break
            }
            case 'auth/weak-password': toast.error('Password must be at least 6 characters long')
          }
          setLoggingIn(false)
          return
        }
      }
      if (response) {
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        sessionStorage.setItem('ID Token', response._tokenResponse.idToken)
        const header = { headers: { authorization: `bearer ${sessionStorage.getItem('ID Token')}` } }
        let userData
        loggingIn === 'log in'
          ? userData = await axios.get(`https://spotifly-backend-ga.herokuapp.com/api/users/${email}`, header)
          : userData = await axios.post('https://spotifly-backend-ga.herokuapp.com/api/users/', {
            email: email,
            playlists: []
          }, header)
        setUser(userData.data)
        setLoggingIn(false)
        navigate('/home')
      }
    }
    handleSetUser()
  }, [loggingIn])

  useEffect(() => {
    let refreshUser
    if (localStorage.getItem('user') !== 'undefined' || undefined) refreshUser = JSON.parse(localStorage.getItem('user'))
    refreshUser && setUser(refreshUser)
  }, [])

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  const Blank = ({ setUser }) => {
    const navigate = useNavigate()
    useEffect(() => {
      let refreshUser
      if (localStorage.getItem('user') !== 'undefined' || undefined) {
        refreshUser = JSON.parse(localStorage.getItem('user'))
      }
      console.log(refreshUser)
      refreshUser && setUser(refreshUser)
      refreshUser ? navigate('/home') : navigate('/login')
    }, [])
    return (
      <></>
    )
  }

  return (
    <div className='app'>
      {user && <Nav user={user} setUser={setUser} setEmail={setEmail} />}
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Blank user={user} setUser={setUser} />} />
        <Route path='/login' element={<Login title='Log In' setEmail={setEmail} setPassword={setPassword} handleLogin={handleLogin} />} />
        <Route path='/home' element={<Home user={user} setUser={setUser} />} />
        <Route path='/playlist/:id' element={<Playlist user={user} setUser={setUser} playlist={playlist} setPlaylist={setPlaylist} />} />
      </Routes>
    </div>
  )
}

export default App;
