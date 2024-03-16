import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // For length
  const [length, setLength] = useState(8);
  //For Number checkbox
  const [numberAllowed, setNumberAllowed] = useState(false);
  //For Character checkbox
  const [characterAllowed, setCharacterAllowed] = useState(false);

  //For INPUT FIELDS
  const [password, setPassword] = useState("");
  

  //useRef Hook
  const passwordRef = useRef(null); 


  //For Password Generator
  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let pass = "";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*-_+=[]()`~{}|:<>?";
    }

    // let chars = str.split("");
    for (let x = 0; x <= length; x++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);
    window.navigator.clipboard.writeText(password);
  },[password]);


  // passwordGenerator();
  
  // use effect is used to kuch bhi change ho toh run hoga
  //jabki useCallback sirf memonization cache mai store k liye rakh rha ho
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <div
        className="w-full max-w-md 
      mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800"
      >
        <h1 className=" text-white text-center my-3">Password Generator</h1>
        <div
          className="flex shadow rounded
           overflow-hidden mb-4"
        >
          <input
            type="text"
            name="password"
            value={password}
            className="w-full outline-none py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
            className="outline-none bg-blue-700 
            text-white px-3 py-1 shrink-0 rounded"
            onClick={copyPasswordToClipboard}
            type="button"
          >
            COPY
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              min={8}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
              onChange={(e) => setNumberAllowed(e.target.checked)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="cursor-pointer"
              defaultChecked={characterAllowed}
              onChange={(e) => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
