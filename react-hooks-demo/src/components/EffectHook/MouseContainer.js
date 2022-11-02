import { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const initialValue = true;
  const [display, setDisplay] = useState(initialValue);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
