import { useEffect, useState } from "react";

const IntervalHookCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
};

export default IntervalHookCounter;
