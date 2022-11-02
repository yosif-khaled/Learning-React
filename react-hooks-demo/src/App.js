import ReducerDataFetching from './components/ReducerDataFetching/DataFetching'

const App = () => {
  return (
    <div>
      <ReducerDataFetching />
    </div>
  )
}

export default App


// Use Reducer With Context for Global State Management
// import { createContext, useReducer } from "react";
// import "./App.css";
// import ComponentA from "./components/ReducerContext/ComponentA";
// import ComponentB from "./components/ReducerContext/ComponentB";
// import ComponentC from "./components/ReducerContext/ComponentC";

// export const CountContext = createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
//       <div className="App">
//         Count - {count}
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   );
// }

// export default App;
