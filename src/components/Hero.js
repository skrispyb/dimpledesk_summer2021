import React from "react";

import logo from "../assets/dimpledesk.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Welcome to DimpleDesk</h1>

    <p className="lead">
      DimpleDesk is a school project by team Blue7, using <a href="https://reactjs.org">React.js</a>
    </p>
  </div>
);

export default Hero;
