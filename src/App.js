import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { useState } from 'react'


function App() {
  const [users, setUsers] = useState()
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div className='login'>
      {loggedIn ? <Nav /> : <></>}
      <Routes>
        <Route path='/' element={<Login users={users} setUsers={setUsers} />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
