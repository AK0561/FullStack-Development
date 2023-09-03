import React, { useState } from "react";
import "./App.css";

let isAdmin = true;

const person = {
  id: 1,
  name: "Piyush Garg",
  age: 22,
  balance: 100,
};

const personProxy = new Proxy(person, {
  set: (obj, prop, value) => {
    if (prop === "name") {
      obj[prop] = value;
      return true;
    } else {
      throw new Error("You can only change name property");
    }
  },
  get: (obj, prop) => {
    if (prop === "balance") {
      if (isAdmin) return obj[prop];
      return null;
    }
    return obj[prop];
  },
});

function App() {
  const [state, setState] = useState(1);
  return (
    <div className="App">
      <h1>{personProxy.id}</h1>
      <h1>{personProxy.name}</h1>
      <h1>{personProxy.balance}</h1>
      <button
        onClick={(e) => {
          personProxy.name = "Arnav Aggarwal";
          setState((s) => s + 1);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default App;