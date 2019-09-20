import React, {useState} from 'react';
import './App.css';
import { evaluate } from "mathjs"
import Button from "./components/Button"


function App() {
  let [result, setResult] = useState("");
  function clear() {
    setResult("")
  }
  
  function addTo(e) {
    if (result === "") {
      if (e.target.innerText === "+" || e.target.innerText === "-" || e.target.innerText === "/" || e.target.innerText === "*") {
        return;
      }
    }
    setResult(result + e.target.innerText);
  }
  function equal() {
    if (result === "") return;
    let temp = evaluate(result);
    setResult(temp)
  }
  return (
    <div className="App">
      <div id="calculator">
      <div id="input">{result}</div>
        <div className="row">
          <Button handleClick={addTo} >7</Button>
          <Button handleClick={addTo} >8</Button>
          <Button handleClick={addTo} >9</Button>
          <Button handleClick={addTo} styled={true}>/</Button>
          
        </div>
        <div className="row">
          <Button handleClick={addTo} >4</Button>
          <Button handleClick={addTo} >5</Button>
          <Button handleClick={addTo} >6</Button>
          <Button handleClick={addTo} styled={true}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={addTo} >1</Button>
          <Button handleClick={addTo} >2</Button>
          <Button handleClick={addTo} >3</Button>
          <Button handleClick={addTo} styled={true}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addTo} >.</Button>
          <Button handleClick={addTo} >0</Button>
          <Button handleClick={equal} >=</Button>
          <Button handleClick={addTo} styled={true}>-</Button>
        </div>
        <div className="row-clear">
          <Button handleClick={clear} >Clear</Button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
