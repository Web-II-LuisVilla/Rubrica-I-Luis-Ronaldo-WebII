import React from "react";
import "./Navbar.css";
import { Outlet, Link} from "react-router-dom";

const Navbar = () => {

  return (
    <>
    <header className="navbar">
      <h2><Link to="/">Overview</Link></h2>
      <h2><Link to="/content">Content</Link></h2>
      <h2><Link to="/create">Create</Link></h2>
    </header>
    <Outlet/>
    </>
  );
};

export default Navbar;
