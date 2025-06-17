import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Component/NavBar'
import Home from './pages/home/Home';
import About from './pages/about/About';
import H from './H';


const App = () => {
  return (
    <>
     <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;