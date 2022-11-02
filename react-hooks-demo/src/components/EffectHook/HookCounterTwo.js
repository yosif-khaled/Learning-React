import { useState, useEffect } from 'react'

const HookCounterTwo = () => {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('useEffect ran - document title updated')
    document.title = `count: ${count}`
  }, [count])
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => { setCount(prevCount => prevCount + 1) }}>Count - {count}</button>
    </div>
  )
}

export default HookCounterTwo