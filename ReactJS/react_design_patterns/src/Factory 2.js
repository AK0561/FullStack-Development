import React from "react";
import "./App.css";

const userFactory = ({ fname, lname, age }) => ({
  firstName: fname,
  lastName: lname,
  age,
  fullName() {
    return `${fname} ${lname}`;
  },
  isEligibleToVote() {
    return `${age >= 18}`;
  },
});

const piyush = userFactory({ fname: "Piyush", lname: "Garg", age: 22 });

const mehul = userFactory({ fname: "Mehul", lname: "Mohan", age: 23 });

const jhon = userFactory({ fname: "Jhon", lname: "Doe", age: 30 });

const users = [piyush, mehul, jhon];

function App() {
  return (
    <div className="App">
        {users.map((user) => (
          <li>
            {user.fullName()} - Can they vote {user.isEligibleToVote()}
          </li>
        ))}
    </div>
  );
}

export default App;