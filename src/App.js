import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { useEffect, useState } from 'react'
import Playlist from './Components/Playlist/Playlist';
import Form from './Components/Form/Form';
import { app } from './firebase'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


function App() {
  const [user, setUser] = useState('')
  const [playlist, setPlaylist] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAction = async (action) => {
    const authentication = getAuth()
    if (action === 'register') {
      const response = await createUserWithEmailAndPassword(authentication, email, password)
      // pop up error if user already in use
    }
  }

  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  return (
    <div className='login'>
      {user ? <Nav user={user} setUser={setUser} /> : <></>}
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
