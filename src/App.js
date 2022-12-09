import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
