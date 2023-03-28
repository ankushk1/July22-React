import logo from "./logo.svg";
import "./App.css";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import FuncStateComponent from "./components/FuncStateComponent";
import PropsComp from "./components/PropsComp";
import Card from "./components/Card";
import Avatar from "./components/Avatar";
import { useState, createContext } from "react";
import ComponentA from "./components/ContextComps/ComponentA";
import FormComp from "./components/FormComp";
import UseEffectComp from "./components/UseEffectComp";

export const messageContext = createContext(null);
// messageContext.displayName = "message"
function App() {
  const [val, setVal] = useState("Initial Value");

  const [mount, setMount] = useState(true);

  return (
    <div>
      {mount && <UseEffectComp />}
      <br /><br /><br />

      <div 
        
        >
        <button onClick={() => setMount(!mount)}>Mount/Unmount</button>
      </div>
    </div>
  );
}

export default App;
