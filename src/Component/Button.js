import React from "react";
import "../Style/button.css";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const handlNavigate = () => {
    navigate("/home");
  };

  return (
    <>
      <div className="button-container">
        <button onClick={handlNavigate}>Home Page</button>
      </div>
    </>
  );
};

export default Button;
