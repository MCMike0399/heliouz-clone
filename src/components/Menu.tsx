import React from 'react';
import './Menu.css'; // Asegúrate de que el nombre del archivo y la ruta sean correctos

const Menu: React.FC = () => {
  return (
    <nav className="menu">
      <ul>
        <li><a href="/" className="menu-link">Inicio</a></li>
        <li><a href="/projects/" className="menu-link">Proyectos</a></li>
        <li><a href="/pubs/" className="menu-link">Publicaciones</a></li>
        <li><a href="/contacto/" className="menu-link">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Menu;
