import React from "react";
import "../Style/nav.css";
import { useNavigate } from "react-router-dom";
 
const Nav = () => {
  const navigate = useNavigate()

  const hnevigate = () =>{
    navigate("/")
  }
  return (
    <>
      <div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>HOME</li>
            <li>GAMEPLAY</li>
            <li>LIVE</li>
            <li>UPCOMEING</li>
            <li>PAGE</li>
            <li className="L-LOGIN" onClick={hnevigate}>LOG IN</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
