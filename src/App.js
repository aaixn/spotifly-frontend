import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { useState } from 'react'
import Playlist from './Components/Playlist/Playlist';


function App() {
  const [user, setUser] = useState('')
  const [playlist, setPlaylist] = useState({})
  // const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className='login'>
      {user ? <Nav user={user} setUser={setUser} /> : <></>}
      <Routes>
        <Route path='/' element={<Login user={user} setUser={setUser} />} />
        <Route path='/home' element={<Home />} />
        <Route path='/playlist/:id' element={<Playlist user={user} setUser={setUser} playlist={playlist} setPlaylist={setPlaylist} />} />
      </Routes>
    </div>
  );
}

export default App;
