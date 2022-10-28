import "./App.css";
import NAMES from "./Components/data.json";
import { useState, useTransition } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isPending, startTransition] = useTransition();
  const changeHandler = (event) => {
    let value = event.target.value;
    setInputValue(value);
    startTransition(()=>setQuery(value))
  };
  const filteredNames = NAMES.filter((item) => {
    return item.FirstName.includes(query) || item.LastName.includes(query);
  });

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={changeHandler} />
      { isPending && <p>Updating List...</p> }
      {filteredNames.map((item) => {
        return (
          <p key={item.ID}>
            {item.FirstName} {item.LastName}
          </p>
        );
      })}
    </div>
  );
}

export default App;
