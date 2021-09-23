import React from "react";
import "./About.css";
import { Helmet } from "react-helmet";
export default function About() {
  return (
    <div className="about">
      <Helmet>
        <title>SatyaJit | About</title>
      </Helmet>
      <h1>About</h1>
    </div>
  );
}
