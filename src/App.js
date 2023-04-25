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
import ApiComp from "./components/ApiComp";
import Form2 from "./components/Form2";
import DarkLight from "./components/DarkLight";
import Counter from "./components/HOC/Counter";
import Hover from "./components/HOC/Hover";
import Products from "./components/HOC/Products";
import Users from "./components/HOC/Users";
import NestedState from "./components/NestedState";
import UseReducer from "./components/UseReducer";
import Todo from "./components/Todo";
import UseMemoHook from "./components/UseMemoHook";
import UseCallbackHook from "./components/UseCallbackHook";

export const messageContext = createContext(null);
// messageContext.displayName = "message"
function App() {
  const [val, setVal] = useState("Initial Value");
  const [mount, setMount] = useState(true);

  return (
    <div>
      {/* {mount && <UseEffectComp />}
      <br />
      <br />
      <br />

      <div>
        <button onClick={() => setMount(!mount)}>Mount/Unmount</button>
      </div> */}
      {/* <ApiComp/> */}
      {/* <Form2/> */}
      {/* <DarkLight/> */}
      {/* <Counter name="XYZ"/>
      <Hover/> */}
      {/* <Products/>
      <Users/> */}
      {/* <NestedState/> */}
      {/* <UseReducer/> ; */}
      {/* <Todo/> */}
      {/* <UseMemoHook/> */}
      {/* <UseCallbackHook/> */}

    </div>
  );
}

export default App;
