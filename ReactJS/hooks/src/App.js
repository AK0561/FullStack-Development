// 1.useRef Hook

// import React, { useState, useRef} from 'react'
// export default function App(){
// const [name, setName] = useState('')
// const inputRef = useRef()
// function focus () {
// inputRef.current.focus()
// }
// return 
// (
// <>
// <input ref={inputRef} value={name} onChange={e =>setName (e.target. value)} />
// <div>My name is {name}</div>
// <button onClick={focus}>Focus</button>
// </>
// )
// }


// import React, { useState,useEffect,useRef} from 'react'
// export default function App() {
// const [name, setName] = useState('')
// const prevName = useRef ('')
// useEffect ( () =>{
// prevName.current = name
// } , [name])
// return (
// <>
// <input value={name} onChange={e => setName(e.target.value)} /> 
// <div>My name is {name} and it used to be {prevName.current} </div>
// </>
// )
// }

// 2.useReducer

// import React, { useReducer } from 'react'
// const initialState = 0;
// const reducer = (state,action) =>
// {
// if (action.type === "INCREMENT") 
// {
// return state + 1;
// }
// if (action.type === "DECREMENT") 
// {
// return state-1;
// }
// return state;
// }

// const App = () =>{
// const [state, dispatch] = useReducer(reducer,initialState);
// return (
//   <>
// <div> 
//   <p>{state}</p>
// <button onClick={() => dispatch( {type:"INCREMENT"})}> Inc </button>
// <button onClick= {() =>dispatch({type:"DECREMENT"})}> Dec </button>
// </div>
//  </>
// )
// }
// export default App;

//3.useContext

// import React , {createContext} from 'react';
// import ComA from './ComA'
// const FirstName =createContext();
// const LastName =createContext();
// const App = ()=> {
//   return (
//     <>
//     <FirstName.Provider value={"Arnav"}>
//       <LastName.Provider value={"Aggarwal"}>
//       <ComA />;
//       </LastName.Provider>
//     </FirstName.Provider>
//     </>
    

//   )
// }
// export default App;
// export {FirstName , LastName};

//4.Custom Hook


// import React , {useState} from "react";
// function useCounter(initialvalue)
// {
//   const[count,setCount] =useState(initialvalue)
//   const add =() => setCount(c => c+1)
//   const sub =() => setCount(c => c-1)
//   return {count,add,sub}
// }
// function App()
// {
//   const { count,sub } =useCounter(100)
//   return (
//     <div>
//       <h1 onClick={sub}>Counter 1 @ {count}</h1>
//     </div>
//   )
// }
// export default App