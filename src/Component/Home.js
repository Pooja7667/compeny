import React from "react";
import "../Style/home.css";
import bg from "../Image/bg2.png";
import Nav from "./Nav";
import Allpart from "./Allpart";
import Litle from "./Litle";

const Home = () => {
  return (
    <>
      <div className="main-container">
        <img src={bg} alt="" style={{ width: "100%" }} />
        <Nav />
        <Litle />
        <Allpart />
      </div>
    </>
  );
};

export default Home;
