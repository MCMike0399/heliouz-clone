import React from 'react';
import './index.css'; 
import planeImage from '../../assets/plane.png';
import emailImage from '../../assets/correu.png';

const Contacto: React.FC = () => {
  return (
    <main>
      <article className="contacto-container">
       

        <div className="contacto-content">
        
          <p>Me puedes contactar por alguna de mis redes sociales:<br />
            <a href="https://twitter.com/Heliouz__" target="_blank" rel="noopener noreferrer">Twitter</a>, 
            <a href="https://www.instagram.com/heliouz_/" target="_blank" rel="noopener noreferrer">Instagram</a>, 
            <a href="https://www.tiktok.com/@heliouz_" target="_blank" rel="noopener noreferrer">TikTok</a>.
          </p>

          <p>O si lo prefieres por correo a:</p>

          <img className="email-image" src={emailImage} alt="Imagen de correo" />
          
        </div>

        <img className="plane-image" src={planeImage} alt="Imagen de avión" />
      </article>
    </main>
  );
}

export default Contacto;
