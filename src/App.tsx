import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer/index.tsx";

export default function App() {
   const [tabValue, setTabValue] = useState<number>(0); // Inicializar el estado

   return (
      <div className="App">
         <Header tabValue={tabValue} setTabValue={setTabValue} /> {/* Pasar ambos valores */}
         <Content tabValue={tabValue} setTabValue={setTabValue} /> {/* Pasar también a Content */}
         <Footer />
      </div>
   );
}
