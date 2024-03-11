import React,{ useState } from 'react';
// import './App.css'
import Chai from './chai.jsx'

function App() {

  let [counter,setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    // counter++;
    console.log(`Value Added `, counter);
    if(counter >= 20){
      counter = 19;
    }
    setCounter(counter+1);
  
  }

  const removeValue = () => {
    // counter--;
    if(counter <= 0){
      counter = 1;
    }
    setCounter(counter-1);
  }

  return (
    <>
       <h1>Chai & React</h1>
       <h2>Counter Value : {counter}</h2>
       <button onClick={addValue}>Add Value {counter}</button>
       <br /><br />
       <button onClick={removeValue}>Remove Value {counter}</button>
       <p>footer : {counter}</p>
    </>
  )
}

export default App
