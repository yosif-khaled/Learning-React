import { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1); 
    }
  }

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
};

export default HookCounterTwo;

// This way is unsafe, use the one above

// const HookCounterTwo = () => {
//   const initialCount = 0;
//   const [count, setCount] = useState(initialCount);

//   return (
//     <div>
//       <p>count: {count}</p>
//       <button onClick={() => setCount(initialCount)}>Reset</button>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// };
