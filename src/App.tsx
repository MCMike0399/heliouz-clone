import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Publicaciones from './components/Publicaciones';
import Contacto from './components/Contacto.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pubs" element={<Publicaciones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
