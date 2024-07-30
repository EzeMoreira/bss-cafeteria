import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import Catalog from './components/Catalog';
import Contacto from './components/Contacto';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/contact" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

