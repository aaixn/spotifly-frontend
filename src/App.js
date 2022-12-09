import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {useState} from 'react'


function App() {
  const [users, setUsers] = useState()
  return (
    <div className='login'>
      <Login users={users} setUsers={setUsers}/>
      {/* <Nav /> */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
