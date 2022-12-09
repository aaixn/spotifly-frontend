import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Login />
      {/* <Nav /> */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
