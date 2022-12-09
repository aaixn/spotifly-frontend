import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { useState } from 'react'


function App() {
  const [user, setUser] = useState('')
  // const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className='login'>
      {user ? <Nav /> : <></>}
      <Routes>
        <Route path='/' element={<Login user={user} setUser={setUser} />} />
        <Route path='/:id/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
