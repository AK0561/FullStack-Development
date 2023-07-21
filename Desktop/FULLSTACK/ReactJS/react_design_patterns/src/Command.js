//This example also explains the module design pattern in ReactJS in which various modules are imported in order to enhance the usability of our code.
import React from "react";
import "./App.css";

import UserManager from "./user";
import Command from "./command-1";

function CreateUserCommand(name) {
  return new Command((users) => users.push(name));
}

function DeleteUserCommand(index) {
  return new Command((users) => users.splice(index, 1));
}

const userManager = new UserManager();

userManager.execute(new CreateUserCommand("Piyush"));
userManager.execute(new CreateUserCommand("Mehul"));

userManager.execute(new DeleteUserCommand(0));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {userManager.users.map((user) => (
          <li>{user}</li>
        ))}
      </header>
    </div>
  );
}

export default App;