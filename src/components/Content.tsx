import React from "react";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import PersonalInfo from "./PersonalInfo";
import Publicaciones from "./Publicaciones";
import Contacto from "./Contacto";

type Props = {
   tabValue: number; // Propiedad para el valor de la pestaña
   setTabValue: (value: number) => void; // Propiedad para cambiar el valor de la pestaña
};

export default function Content({ tabValue, setTabValue }: Props) {
   return (
      <main>
         {tabValue === 0 && <AboutMe />}
         {tabValue === 1 && <Projects setTabValue={setTabValue} />} {/* Pasar setTabValue */}
         {tabValue === 2 && <Publicaciones />}
         {tabValue === 3 && <Contacto />}
      </main>
   );
}
