import React, { useReducer, useRef } from "react";
import "../App.css";
const CurrencyConverter = () => {
  const inputRef = useRef();
  const convertCurrency = (event) => {
    document.getElementById("currencyOutput").value =
      document.getElementById("currencyInput").value * 80;
  };
  return (
    <div className="converter">
      <input
        id="currencyInput"
        ref={inputRef}
        type="number"
        onChange={convertCurrency}
      />
      <button onClick={convertCurrency}>Convert</button>
      <input id="currencyOutput" disabled={true} />
    </div>
  );
};

export default CurrencyConverter;
