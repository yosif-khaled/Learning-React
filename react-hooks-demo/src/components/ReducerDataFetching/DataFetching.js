import axios from "axios";
import { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action) {
    case "FETCH_SUCCESS":
      return { loading: false, post: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, post: {}, error: `Something Went Wrong` };
    default:
      return state;
  }
};

const DataFetching = () => {
  const [currentState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: `FETCH_ERROR` });
        console.log(error);
      });
  }, []);

  return (
    <div>
      {currentState.loading ? "Loading..." : currentState.post.title}
      {currentState.error?currentState.error:null}
    </div>
  );
};

export default DataFetching;
