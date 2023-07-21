import React from "react";
import "./App.css";

const animalFun = {
  walk: () => <p>Walking...</p>,
  sleep: () => <p>Sleeping..</p>,
};

const dogFn = {
  bark: () => <p>Barking...</p>,
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Lion {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(dogFn, animalFun);
Object.assign(Dog.prototype, dogFn);
Object.assign(Lion.prototype, animalFun);

const tuffy = new Dog("Tuffy");

function App() {
  return (
    <div className="App">
      {tuffy.bark()}
    </div>
  );
}

export default App;