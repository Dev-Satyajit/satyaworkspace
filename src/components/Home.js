import React from "react";
import "./Home.css";
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>SatyaJit | Home</title>
      </Helmet>
      <h1>Home</h1>
    </div>
  );
}
