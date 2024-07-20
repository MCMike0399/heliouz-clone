import React from 'react';
import './Publicaciones.css';

const Publicaciones: React.FC = () => {
  return (
    <article>
      <hr style={{ height: '8px', visibility: 'hidden' }} />

      <h3 id="publicaciones">Publicaciones:</h3>

      <ul>
        <li>
          <p>
            <a href="https://www.reforma.com/alertan-por-basura-electoral-en-calles/ar2791241" target="_blank" rel="noopener noreferrer">
              Alertan por ‘basura’ electoral en calles
            </a>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Publicado en <em>El Reforma</em>, <strong>Abril 2024</strong>
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.animalgourmet.com/2023/06/29/cafe-latte-dura-menos-tiempo-en-cdmx/" target="_blank" rel="noopener noreferrer">
              ¿El café latte es más inestable en CDMX que en el resto del mundo?
            </a>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Publicado en <em>Animal Gourmet</em>, <strong>Junio 2023</strong>
          </p>
        </li>
        <li>
          <p>
            Diseño de tratamiento térmico de temple y particionado para desarrollo de aceros avanzados de alta resistencia (AHSS).
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Publicado en <em>Tesis UNAM</em>, <strong>Junio 2023</strong>.
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.eluniversal.com.mx/menu/crean-mapa-de-cafeterias-fuera-de-la-roma-y-la-condesa-con-recomendaciones-de-twitter/" target="_blank" rel="noopener noreferrer">
              Crean mapa de cafeterías fuera de la Roma y la Condesa
            </a>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Publicado en <em>El universal</em>, <strong>Mayo 2023</strong>
          </p>
        </li>
        <li>
          <p>
            <a href="https://upcommons.upc.edu/handle/2117/375173" target="_blank" rel="noopener noreferrer">
              Breve historia del temple: de las espadas a los automóviles modernos
            </a>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Publicado en <em>Materiales Avanzados</em>, UNAM, <strong>Septiembre 2022</strong>
          </p>
        </li>
        <li>
          <p>
            <a href="https://www.sdpnoticias.com/estilo-de-vida/por-que-se-encoge-un-billete-de-20-pesos-al-calentarse-cientifico-lo-explica/" target="_blank" rel="noopener noreferrer">
              ¿Por qué se encoge un billete de 20 pesos al calentarse? Científico lo explica
            </a>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Publicado en <em>SDP Noticias</em>, <strong>Octubre 2021</strong>
          </p>
        </li>
        <li>
          <p>
            Efecto de la microestructura sobre el comportamiento termoelástico de la aleación Al 1100 procesada por RCS.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Publicado en <em>Tesis UNAM</em>, <strong>Octubre 2019</strong>.
          </p>
        </li>
      </ul>
    </article>
  );
}

export default Publicaciones;
