import { useState } from "react";

export const Form = () => {

  const [userName, setUserName] = useState("");
  
  const submitHandler = (event) => {
    event.preventDefault();
    alert(userName);
  }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="">UserName</label>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
};
