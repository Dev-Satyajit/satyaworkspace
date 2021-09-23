import React from "react";
import "./Services.css";
// import { Helmet } from "react-helmet";
export default function Services() {
  return (
    <div className="services">
      {/* <Helmet>
        <title>SatyaJit | Services</title>
      </Helmet> */}
      <div className="heading">
      <span>Our services</span>
      </div>
      <div className="container">
        <div className="service-box">
          <ul className="service-menu">
            <li className="service-item">
              <a href="https://docs.google.com/spreadsheets/d/1_Tfy236aj3aip8qfJ0pbfNyzaPsKikl81uPUj_RA6Mw" className="service-link" target="_blank" rel="noreferrer"><i className="fas fa-file-alt"></i> Work Sheet</a>
            </li>
            <li className="service-item">
              <a href="https://docs.google.com/spreadsheets/d/1y5NXKMgCgbNuUTYeMnbk2KGJ_lSfvCp1ZGNh2NEvpnU" className="service-link" target="_blank" rel="noreferrer"><i className="fas fa-file-alt"></i> Priority Sheet</a>
            </li>
            <li className="service-item">
              <a href="https://docs.google.com/spreadsheets/d/1UQ-Sis33M6iDJx4vJwnvUwyBJLjHSczmyrdmhfWXF4g" className="service-link"><i className="fas fa-file-alt" target="_blank" rel="noreferrer"></i> Count Sheet</a>
            </li>
            <li className="service-item">
              <a href="/" className="service-link"><i className="fas fa-file-alt" target="_blank" rel="noreferrer"></i> Audit Sheet</a>
            </li>
            <li className="service-item">
              <a href="/" className="service-link"><i className="fas fa-file-alt" target="_blank" rel="noreferrer"></i> Hourly Audit Sheet</a>
            </li>
            <li className="service-item">
              <a href="/" className="service-link"><i className="fas fa-file-alt" target="_blank" rel="noreferrer"></i> Call Tracker Sheet</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
