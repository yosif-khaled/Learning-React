import { useState, useEffect } from 'react'

const HookCounterOne = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  useEffect(()=> {
    document.title = `Clicked: ${count}`
  })
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  )
}

export default HookCounterOne