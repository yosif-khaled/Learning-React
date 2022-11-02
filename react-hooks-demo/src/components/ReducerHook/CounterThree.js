// Use Multiple Reducers
import { useReducer } from "react";

const initialState = 0
const reducer = (currentState, action) => {
    switch (action) {
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return currentState = initialState
        default:
            return currentState
    }
}
const CounterThree = () => {
    const [ count1, dispatch1 ] = useReducer(reducer, initialState)
    const [ count2, dispatch2 ] = useReducer(reducer, initialState)
  return (
    <div>
        <p>Count: {count1}</p>
        <button onClick={()=>dispatch1('increment')}>Increment</button>
        <button onClick={()=>dispatch1('decrement')}>Decrement</button>
        <button onClick={()=>dispatch1('reset')}>Reset</button>
        <span />
        <p>Count: {count2}</p>
        <button onClick={()=>dispatch2('increment')}>Increment</button>
        <button onClick={()=>dispatch2('decrement')}>Decrement</button>
        <button onClick={()=>dispatch2('reset')}>Reset</button>
    </div>
  )
}

export default CounterThree