import { useNavigate } from "react-router-dom";
import { useAuth } from "./utils/auth";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      Welcome {auth.user}
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Profile;
