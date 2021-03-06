import "./App.css";
import React, { useState } from "react";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [result, setResult] = useState(0);

  function allClear() {
    setNumber1("");
    setNumber2("");
    setCurrentOperation("");
    setResult(0);
  }

  function del() {
    if (number2 !== "") {
      setNumber2(number2.substring(0, number2.length - 1));
    } else {
      if (number1 !== "") {
        setNumber1(number1.substring(0, number1.length - 1));
      }
    }
  }

  function clickNumber(val) {
    if (currentOperation === "") {
      setNumber1(number1 + val);
    } else {
      setNumber2(number2 + val);
    }
  }

  function clickOperation(val) {
    if (result != 0) {
      setCurrentOperation(val);
      setNumber1(result);
      setNumber2("");
      setResult(0);
    } else {
      setCurrentOperation(val);
    }
  }

  function getResult() {
    switch (currentOperation) {
      case "+":
        setResult(Number(number1) + Number(number2));
        break;
      case "-":
        setResult(Number(number1) - Number(number2));
        break;
      case "*":
        setResult(Number(number1) * Number(number2));
        break;
      case "/":
        setResult(Number(number1) / Number(number2));
        break;
    }
  }

  return (
    <div className="App">
      <div className="calculator-grid">
        <div className="output">
          <div className="prev-operand">
            {currentOperation ? number1 + currentOperation : ""}
          </div>
          <div className="current-operand">
            {result ? result : !currentOperation ? number1 : number2}
          </div>
        </div>

        <button className="span-two" onClick={allClear}>
          AC
        </button>
        <button onClick={del}>DEL</button>
        <button
          onClick={() => {
            clickOperation("/");
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            clickNumber(7);
          }}
        >
          7
        </button>
        <button
          onClick={() => {
            clickNumber(8);
          }}
        >
          8
        </button>
        <button
          onClick={() => {
            clickNumber(9);
          }}
        >
          9
        </button>
        <button
          onClick={() => {
            clickOperation("*");
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            clickNumber(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            clickNumber(5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            clickNumber(6);
          }}
        >
          6
        </button>
        <button
          onClick={() => {
            clickOperation("+");
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            clickNumber(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            clickNumber(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            clickNumber(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            clickOperation("-");
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            clickNumber(".");
          }}
        >
          .
        </button>
        <button
          onClick={() => {
            clickNumber("0");
          }}
        >
          0
        </button>
        <button className="span-two" onClick={getResult}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
