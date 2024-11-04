import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Draftboard from './components/draftboard'; 
import Rankings from './components/rankings';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Team />} />
          <Route path="/draftboard" element={<Draftboard />} />
          <Route path="/rankings" element={<Rankings />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
