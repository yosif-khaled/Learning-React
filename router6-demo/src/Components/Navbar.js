// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <nav>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//     </nav>
//   )
// }

// export default Navbar

import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./utils/auth";
const Navbar = () => {
  const auth = useAuth();

  return (
    <nav className="primary-nav">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
};

export default Navbar;
