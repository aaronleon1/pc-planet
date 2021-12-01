import React, { useEffect } from "react";
import "./ContactUs.css";

function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="form-container">
      <div className="form-heading" style={{ background: "#fff" }}>
        <h1 style={{ fontWeight: "400" }}>Questions or concerns?</h1>
        <h2 style={{ fontWeight: "400", paddingTop: "16px" }}>
          Send us a message and you'll hear back from us within two business
          days.
        </h2>
      </div>
      <div
        className="form-body"
        direction="column"
        style={{ background: "#fff" }}
      >
        <form>
          <input
            className="top-inputs"
            type="text"
            placeholder="Subject"
            style={{
              fontSize: "20px",
              margin: "8px 0",
              padding: "16px",
              background: "transparent",
              outline: "none",
              border: "none",
              borderBottom: "1px solid black",
            }}
          />
          <input
            className="top-inputs"
            type="email"
            placeholder="Email Address"
            style={{
              fontSize: "20px",
              margin: "8px 0",
              padding: "16px",
              background: "transparent",
              outline: "none",
              border: "none",
              borderBottom: "1px solid black",
            }}
          />
          <textarea
            className="bottom-input"
            type="text"
            placeholder="Message"
            style={{
              fontSize: "20px",
              fontFamily: "Open Sans",
              fontWeight: "500",
              margin: "8px 0",
              paddingLeft: "16px",
              background: "transparent",
              outline: "none",
              border: "none",
              borderBottom: "1px solid black",
            }}
          />

          <input type="submit" value="Submit Message" className="form-submit" />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
