import React from 'react';
import './App.css';
import Login from './UI/Components/Pages/Login/Login';
import Request from './UI/Components/Request-Form/Request';

import Home from './UI/Components/Pages/Home';
import About from './UI/Components/Pages/About/About';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registration from './UI/Components/Pages/Registration';
import Dashboard from './UI/Components/Dashboard/Dashboard';
import Stock from './UI/Components/Stock/Stock';
import Impact from './UI/Components/Impact/Impact';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/stock' element={<Stock/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/request' element={<Request/>} />
        <Route path='/register' element={<Registration/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/impact' element={<Impact/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
