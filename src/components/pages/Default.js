import React, { Component } from "react";
import "./Default.css";

class Default extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="error-container">
        <div className="error-code">
          <h1>404</h1>
          <h2>Page not found</h2>
          <h3>
            The requested URL <span>{this.props.location.pathname} </span>was
            not found
          </h3>
        </div>
      </div>
    );
  }
}

export default Default;
