import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";



function App() {
  const [count, setCount] = useState(0);
  
  let myobj = {
    username : "hitesh",
    age : 22
  }

  let newarr =[1,2,3]

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-4">Tailwind Props</h1>
      <Card username="Alex" btntext="clickme now"/>
      <Card username="lex"/>
    </>
  );
}

export default App;
