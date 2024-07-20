import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

export default function App() {
   const [tabValue, setTabValue] = useState<number>(0);
   return (
      <div className="App">
         <Header tabValue={tabValue} setTabValue={setTabValue} />
         <Content tabValue={tabValue} />
      </div>
   );
}
