import AboutMe from "./AboutMe";
import Projects from "./Projects";
import PersonalInfo from "./PersonalInfo";
import Publicaciones from "./Publicaciones";

type Props = {
   tabValue: number;
};

export default function Content({ tabValue }: Props) {
   return (
      <main>
         {tabValue === 0 && <AboutMe />}
         {tabValue === 1 && <Projects />}
         {tabValue === 2 && <PersonalInfo />}
         {tabValue === 3 && <Publicaciones />}
      </main>
   );
}
