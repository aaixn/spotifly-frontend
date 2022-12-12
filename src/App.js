import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { useEffect, useState } from 'react'
import Playlist from './Components/Playlist/Playlist';
import Form from './Components/Form/Form';

function App() {
  const [user, setUser] = useState('')
  const [playlist, setPlaylist] = useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  useEffect(() => {
    window.localStorage.setItem('user', JSON.stringify(user))
  }, [user])
  return (
    <div className='login'>
      {user ? <Nav user={user} setUser={setUser} /> : <></>}
      <Routes>
        <Route path='/login' element={<Form title='Log In'/>} />
        <Route path='/register' element={<Form title='Register'/>}/>
        <Route path='/home' element={<Home setUser={setUser} />} />
        <Route path='/playlist/:id' element={<Playlist user={user} setUser={setUser} playlist={playlist} setPlaylist={setPlaylist} />} />
        
      </Routes>
    </div>
  );
}

export default App;
