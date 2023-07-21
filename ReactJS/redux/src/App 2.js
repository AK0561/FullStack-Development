import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux_store/slices/counter/counter'
import './App.css';

export default function Counter() {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span> {count} </span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}



