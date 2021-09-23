import React from "react";
import "./Services.css";
// import { Helmet } from "react-helmet";
export default function Services() {
  return (
    <div className="services">
      {/* <Helmet>
        <title>SatyaJit | Services</title>
      </Helmet> */}
      <h1>Services</h1>
      <div className="container">
        <div className="service-box">
          <ul className="service-menu">
            <li className="service-item">
              <a href="https://docs.google.com/spreadsheets/d/1_Tfy236aj3aip8qfJ0pbfNyzaPsKikl81uPUj_RA6Mw" className="service-link" target="_blank" rel="noreferrer"><i className="fas fa-file-alt"></i> Work Sheet</a>
            </li>
            <li className="service-item">
              <a href="/" className="service-link"><i className="fas fa-file-alt"></i> Priority Sheet</a>
            </li>
            <li className="service-item">
              <a href="/" className="service-link"><i className="fas fa-file-alt"></i> Count Sheet</a>
            </li>
            <li className="service-item">
              <a href="/" className="service-link"><i className="fas fa-file-alt"></i> Audit Sheet</a>
            </li>
            <li className="service-item">
              <a href="/" className="service-link"><i className="fas fa-file-alt"></i> Hourly Audit Sheet</a>
            </li>
            <li className="service-item">
              <a href="/" className="service-link"><i className="fas fa-file-alt"></i> Call Tracker Sheet</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
