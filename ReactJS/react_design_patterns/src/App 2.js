import React, { useState } from "react";
import SocketService from "./socket(singleton)";

function App() {
  const [state, setState] = useState(1);
  const socket = new SocketService();

  return (
    <div>
      <button onClick={(e) => setState((s) => s + 1)}>{state}</button>
    </div>
  );
}

export default App;
