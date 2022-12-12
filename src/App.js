import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { useEffect, useState } from 'react'
import Playlist from './Components/Playlist/Playlist';
import Form from './Components/Form/Form';
import { app } from './firebase'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState('')
  const [playlist, setPlaylist] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  const handleAction = async (action) => {
    const authentication = getAuth()
    if (action === 'login') {
      try {
        const response = await signInWithEmailAndPassword(authentication, email, password)
        navigate('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      } catch (err) {
        if(err.code === 'auth/wrong-password'){
          toast.error('Please check the Password');
        }
        if(err.code === 'auth/user-not-found'){
          toast.error('Please check the Email');
        }
      }
    }
    if (action === 'register') {
      try {
        const response = await createUserWithEmailAndPassword(authentication, email, password)
        navigate('/home')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
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

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/home')
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  return (
    <div className='login'>
      {user ? <Nav user={user} setUser={setUser} /> : <></>}
      <ToastContainer />
      <Routes>
        <Route path='/login' element={<Form title='Log In' setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction('log in')}/>} />
        <Route path='/register' element={<Form title='Register' setEmail={setEmail} setPassword={setPassword} handleAction={() => handleAction('register')}/>}/>
        <Route path='/home' element={<Home setUser={setUser} />} />
        <Route path='/playlist/:id' element={<Playlist user={user} setUser={setUser} playlist={playlist} setPlaylist={setPlaylist} />} />
      </Routes>
    </div>
  );
}

export default App;
