import React, { useEffect } from 'react';
import './index.css'; 
import fotoPerfil from '../../assets/profile.png'; 

const AboutMe: React.FC = () => {
  useEffect(() => {
    // Agrega el enlace al CSS de Font Awesome dinámicamente
    const css = document.createElement('link');
    css.href = 'https://use.fontawesome.com/releases/v6.2.0/css/all.css';
    css.rel = 'stylesheet';
    css.type = 'text/css';
    document.head.appendChild(css);
  }, []);

  return (
    <main>
      <article className="about-me-container">
        

        <div className="about-me-content">
          <p>Ingeniero mecánico y maestro en ciencia e ingeniería de materiales por la UNAM. Mi especialidad son los materiales metálicos, particularmente los aceros avanzados.  Me gustan los materiales, la ingeniería, los mapas y resolver problemas.</p>

          <p>También divulgo sobre ciencia e ingeniería en <a href="https://www.tiktok.com/@heliouz_" target="_blank" rel="noopener noreferrer">TikTok</a>, donde tengo más de <strong>1.1M</strong> seguidores. Desde <a href="https://www.sdpnoticias.com/estilo-de-vida/por-que-se-encoge-un-billete-de-20-pesos-al-calentarse-cientifico-lo-explica/" target="_blank" rel="noopener noreferrer">por qué se encogen los billetes de $20 pesos al calentarse</a>, hasta los diferentes procesos de soldadura.</p>

          <blockquote>
            <p>Seguro tengo un video que lo explica.</p>
          </blockquote>

          <p>En mis ratos libres y no tan libres también programo. He hecho <a href="https://twitter.com/BigakuSan" target="_blank" rel="noopener noreferrer">bots de twitter</a>, <a href="/projects/qpqt/" target="_blank" rel="noopener noreferrer">aplicaciones para diseñar aleaciones de aceros avanzados</a> y <a href="/projects/estumex/" target="_blank" rel="noopener noreferrer">muchos mapas</a>.</p>
        </div>

        <img className="profile right" src={fotoPerfil} alt="Foto de perfil" />
      </article>
    </main>
  );
}

export default AboutMe;
