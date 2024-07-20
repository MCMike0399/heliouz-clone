import { SetStateAction, Dispatch } from "react";
import "./index.css";

type Props = {
   setTabValue: Dispatch<SetStateAction<number>>;
};

export default function Menu({ setTabValue }: Props) {
   const handleTabChange = (newValue: number) => {
      setTabValue(newValue);
   };

   return (
      <nav className="menu">
         <ul>
            <li>
               <a className="menu-link" onClick={() => handleTabChange(0)}>
                  Inicio
               </a>
            </li>
            <li>
               <a className="menu-link" onClick={() => handleTabChange(1)}>
                  Sobre mí
               </a>
            </li>
            <li>
               <a className="menu-link" onClick={() => handleTabChange(2)}>
                  Proyectos
               </a>
            </li>
            <li>
               <a className="menu-link" onClick={() => handleTabChange(3)}>
                  Contacto
               </a>
            </li>
         </ul>
      </nav>
   );
}
/*
App



*/
