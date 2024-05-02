import React from "react";
import band from "../Image/band.png";
import part2 from "../Image/part2.png";
import part3 from "../Image/part3.png";
import part4 from "../Image/pbg.png";
import part5 from "../Image/perot.png";
import part6 from "../Image/part5.png";
import part7 from "../Image/part6.png";
import part8 from "../Image/part7.png";
import part9 from "../Image/last.png";
import "../Style/All.css";
const Allpart = () => {
  return (
    <>
      <div className="box">
        <div className="frist"></div>
        <img src={band} alt="" className="photo1" />
        <div className="parent">
          <im src={part2} alt="" className="photo2" style={{ height: "70%" }} />
        </div>
        <div className="parent2">
          <img src={part3} alt="" className="photo3" />
        </div>
        <div className="parent3">
          <div className="absolue">
            <div className="div">
              <img
                src={part4}
                alt=""
                className="photo6"
                style={{ height: "60%", width: "70rem" }}
              />
            </div>
            <img src={part5} alt="" className="photo7" />
          </div>

          <div className="parent4">
            <img
              src={part6}
              alt=""
              className="photo8"
              style={{ height: "30%", width: "70rem" }}
            />
          </div>
          <div className="parent5">
            <img
              src={part7}
              alt=""
              className="photo9"
              style={{ height: "50%" }}
            />
          </div>

          <div className="parent6">
            <img src={part8} alt="" className="photo10" />
          </div>
          <div className="parent7">
            <img src={part9} alt="" className="photo11" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Allpart;
