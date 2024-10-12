import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/login.jsx';
import Menu from './Menu/menu.jsx';
import Contacto from './Menu/contactanos.jsx';
import Nosotros from './Menu/nosotros.jsx';
import Servicios from './Menu/servicios.jsx';
import Inicio from './Menu/inicio.jsx';
import Carousel from './Menu/carousel.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/home" element={<Inicio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
