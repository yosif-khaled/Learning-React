import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./utils/auth";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const loginHandler = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label>
        Username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={loginHandler}>Login</button>
    </div>
  );
};

export default Login;
