import React from "react";
import "./homePageLinks.css";

function HomePageLinks() {
  return (
    <div className="home-cards">
      <div className="home-cards-wrapper">
        <div className="home-card">
          <img
            src={require("../../../public/assets/pcsetup.jpg")}
            alt=""
            className="home-card-img"
          />
          <p className="home-card-text">
            Submit your desk setup for a chance to win
          </p>
        </div>
        <div className="home-card">
          <img
            src={require("../../../public/assets/repair.jpg")}
            alt=""
            className="home-card-img"
          />
          <p className="home-card-text">Repairs starting at just $49.99</p>
        </div>
        <div className="home-card">
          <img
            src={require("../../../public/assets/affiliate.jpg")}
            alt=""
            className="home-card-img"
          />
          <p className="home-card-text">
            Content creators: join our affiliate program
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePageLinks;
