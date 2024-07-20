import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/" className="menu-link">Inicio</Link></li>
        <li><Link to="/projects" className="menu-link">Proyectos</Link></li>
        <li><Link to="/pubs" className="menu-link">Publicaciones</Link></li>
        <li><Link to="/contacto" className="menu-link">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
