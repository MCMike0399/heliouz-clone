import React from 'react';
import './index.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Asegúrate de importar faEnvelope

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-buttons">
        <a
          className="social-button twitter"
          href="https://www.twitter.com/heliouz__"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="social-button tiktok"
          href="https://tiktok.com/@heliouz_"
          target="_blank"
          rel="noopener noreferrer"
          title="TikTok"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>
        <a
          className="social-button instagram"
          href="https://www.instagram.com/heliouz_"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          className="social-button email"
          href="/contacto/"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      
      <p>© Helios O. 2024</p>
    </footer>
  );
};

export default Footer;
