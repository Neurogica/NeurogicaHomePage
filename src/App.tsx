import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import People from './components/People';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/people" element={<People />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
