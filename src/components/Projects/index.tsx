import React, { useState } from 'react';
import './index.css';

const projectsData = [
  {
    title: 'Bigaku, bot de twitter.',
    subtitle: 'Desarrollando estética de acuerdo a imágenes virales.',
    tabValue: 4,
    content: (
      <div className="project-detail">
        <h1>Bigaku: Twitter Bot</h1>
        <p>
          Este es un bot de Twitter que desarrolla estética de acuerdo a imágenes virales.
          El bot responde automáticamente a las imágenes publicadas en Twitter con análisis visuales 
          y estilísticos basados en una serie de algoritmos de machine learning.
        </p>
        <blockquote>
          <p>"La estética es subjetiva, pero Bigaku la cuantifica."</p>
        </blockquote>
        <p>
          Puedes ver en acción el bot en su cuenta oficial de Twitter: 
          <a href="https://twitter.com/BigakuSan" target="_blank" rel="noopener noreferrer">@BigakuSan</a>.
        </p>
      </div>
    )
  },
  {
    title: 'Cafeterías CDMX',
    subtitle: 'Cafeterías chidas en la CDMX que NO están en la Roma/Condesa',
    tabValue: 5,
    content: (
      <div className="project-detail">
        <h1>Cafeterías CDMX</h1>
        <p>Descripción de las cafeterías chidas en la CDMX.</p>
      </div>
    )
  },
  {
    title: 'Mapas de México',
    subtitle: 'Algunos mapas que he hecho.',
    tabValue: 6,
    content: (
      <div className="project-detail">
        <h1>Mapas de México</h1>
        <p>Descripción sobre los mapas que has hecho.</p>
      </div>
    )
  },
  {
    title: 'QPQT Steel Calculator',
    subtitle: 'Calculadora para el rápido diseño de aceros de temple y particionado.',
    tabValue: 7,
    content: (
      <div className="project-detail">
        <h1>QPQT Steel Calculator</h1>
        <p>Descripción de la calculadora de aceros.</p>
      </div>
    )
  },
  {
    title: 'Solo una animación',
    subtitle: 'Solo una animación en JS como de Joy Division',
    tabValue: 8,
    content: (
      <div className="project-detail">
        <h1>Solo una animación</h1>
        <p>Descripción de la animación en JS.</p>
      </div>
    )
  },
  {
    title: '¿cuándo un mapa deja de serlo?',
    subtitle: 'Generador de mapas de méxico (pero feos)',
    tabValue: 9,
    content: (
      <div className="project-detail">
        <h1>¿cuándo un mapa deja de serlo?</h1>
        <p>Descripción del generador de mapas.</p>
      </div>
    )
  },
  // Agrega aquí más proyectos...
];

const Projects: React.FC<{ setTabValue: (value: number) => void }> = ({ setTabValue }) => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const handleTabChange = (tabValue: number) => {
    setActiveProject(tabValue); // Cambia al proyecto seleccionado
  };

  const handleBackClick = () => {
    setActiveProject(null); // Regresa a la galería de proyectos
  };

  return (
    <div className="projects-container">
      <h1>Proyectos</h1>

      {/* Mostrar la galería si no hay un proyecto activo */}
      {activeProject === null ? (
        <div className="gallery">
          {projectsData.map((project, index) => (
            <div
              className="projectTile"
              key={index}
              onClick={() => handleTabChange(project.tabValue)}  // Cambia al tabValue del proyecto correspondiente
            >
              <span className="projectContent">
                <h2 className="title">{project.title}</h2>
                <p className="subtitle">{project.subtitle}</p>
              </span>
            </div>
          ))}
        </div>
      ) : (
        // Mostrar el contenido del proyecto seleccionado
        <div className="project-content">
          {projectsData.find(project => project.tabValue === activeProject)?.content}
          <button className="back-button" onClick={handleBackClick}>Volver a los proyectos</button>
        </div>
      )}
    </div>
  );
};

export default Projects;
