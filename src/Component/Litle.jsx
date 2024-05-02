import React from "react";
import girl from "../Image/grlb.png";
import "../Style/S.css"

const Litle = () => {
   
  return (
    <>
      <section className="flex-it">
        <div className="title-box">
          <div className="big -heading">
            <h2>
              Welcome to the <span className="red"> Serpent's</span> Lair:
              <br></br>
              Your
              <span className="sky">Ultimate</span> Gaming
              <br></br>
              <span className="sky">Destination!</span>
            </h2>
          </div>
          <div className="small-title">
            <p>
              From Heists in GTA to Battles in PUBG .<br></br>
              serpentGamer-Your Odysseeey,Your Story
            </p>
            <button className="explor-button">EXPLORE</button>
          </div>
        </div>
        <section className="img-secton">
          <img
            src={girl}
            alt=""
            className="img -left"
            style={{ height: "75%" }}
          />
        </section>
      </section>
    </>
  );
};

export default Litle;
