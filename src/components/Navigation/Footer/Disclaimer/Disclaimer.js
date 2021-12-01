import React from "react";
import "./Disclaimer.css";

const disclaimer = () => {
  return (
    <div className="footer-disclaimer">
      <a className="terms-conditions" href="#">
        Terms & Conditions{" "}
      </a>
      |
      <a className="privacy-policy" href="#">
        {" "}
        Privacy Policy{" "}
      </a>
      | © 2020 PCPlanet Inc. All rights reserved.
    </div>
  );
};
export default disclaimer;
