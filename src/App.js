import {useState} from "react"
import './App.css';
import React from 'react'
function App() {  
    const [counter, setCounter] = useState("0");
    const [color, setColor] = useState("black");
  
    const handleadd = () => {
      setCounter(counter + 1);
    };
    const handlesub = () => {
      setCounter(counter - 1);
    };
  
    return (
      <div
        className="App"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: color,
        }}
      >
        <div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap:"10px",}}>
          <button onClick={handleadd}>+</button>
          <div style={{ color: "white" }}>Count: {counter}</div>
          <button onClick={handlesub}>-</button>
        </div>
        <div>
          <div
            style={{
              position: "fixed",
              padding: " 10px",
              margin: "2px",
              border: "none",
              bottom: "0",
              width: "100%",
            }}
          >
            <button
              onClick={() => setColor("red")}
              style={{
                padding: " 10px",
                border: "none",
                color: "white",
                backgroundColor: "red",
                borderRadius: "5px",
                margin: "5px",
              }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              style={{
                padding: " 10px",
                border: "none",
                color: "white",
                backgroundColor: "green",
                borderRadius: "5px",
                margin: "5px",
              }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              style={{
                padding: " 10px",
                border: "none",
                color: "white",
                backgroundColor: "blue",
                borderRadius: "5px",
                margin: "5px",
              }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("black")}
              style={{
                padding: " 10px",
                border: "none",
                color: "white",
                backgroundColor: "black",
                borderRadius: "5px",
                margin: "5px",
              }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );  
}

export default App;
