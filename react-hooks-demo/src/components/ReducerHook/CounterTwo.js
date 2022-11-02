import React, { useReducer } from 'react'

const initialState = {
  firstCounter: 0,
  secondCounter: 5
}
const reducer = (currentState, action) => {
  switch (action.type) {
    case 'increment1':
      return { ...currentState, firstCounter: currentState.firstCounter + action.value }
    case 'decrement1':
      return { ...currentState, firstCounter: currentState.firstCounter - action.value }
    case 'increment2':
      return { ...currentState, secondCounter: currentState.secondCounter + action.value }
    case 'decrement2':
      return { ...currentState, secondCounter: currentState.secondCounter - action.value }
    case 'reset':
      return currentState = initialState
    default:
      return currentState
  }
}
const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <p>Count 1: {count.firstCounter}</p>
      <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement1', value: 1 })}>Decrement</button>
      <p>Count 2: {count.secondCounter}</p>
      <button onClick={() => dispatch({ type: 'increment2', value: 5 })}>Increment 5</button>
      <button onClick={() => dispatch({ type: 'decrement2', value: 5 })}>Decrement 5</button>

      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

    </div>
  )
}

export default CounterTwo