import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/SignUp'


function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/_login' element={<Login/>} /> 
        <Route path='/_signUp' element={<Signup />} /> 
        <Route path='/aboutUs' element={<AboutUs />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
