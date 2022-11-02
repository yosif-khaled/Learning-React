import { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={countHandler}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
