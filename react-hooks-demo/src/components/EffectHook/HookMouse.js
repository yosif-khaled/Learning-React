import { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("Effect Called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Effect Disabled");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  return (
    <div>
      Hooks: X:{x} , Y:{y}
    </div>
  );
};

export default HookMouse;
