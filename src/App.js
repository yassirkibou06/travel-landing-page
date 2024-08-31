// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Offre from './pages/Offre';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="font-roboto px-4 md:px-8">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/offre" element={<Offre />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
