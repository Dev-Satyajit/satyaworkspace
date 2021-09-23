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
              <a href="https://docs.google.com/spreadsheets/d/1UQ-Sis33M6iDJx4vJwnvUwyBJLjHSczmyrdmhfWXF4g" className="service-link" target="_blank" rel="noreferrer"><i className="fas fa-file-alt"></i> Count Sheet</a>
            </li>
            <li className="service-item">
              <a href="https://docs.google.com/spreadsheets/d/1uCUTpCGl0Jd7koI1fok8ft4UT_d1B6Ina_-tP2aD1kU" className="service-link" target="_blank" rel="noreferrer"><i className="fas fa-file-alt"></i> Audit Sheet</a>
            </li>
            <li className="service-item">
              <a href="https://docs.google.com/spreadsheets/d/1idFo5miNhCmsjIusixpzXZi3YXe7DIWAjHwRzl-jYgY" className="service-link" target="_blank" rel="noreferrer"><i className="fas fa-file-alt"></i> Hourly Audit Sheet</a>
            </li>
            <li className="service-item">
              <a href="https://docs.google.com/spreadsheets/d/17YnMFcqDIgw6c4P7VDiYVRbFa1eygn6dbbE2wcqSdxk" className="service-link" target="_blank" rel="noreferrer"><i className="fas fa-file-alt"></i> Call Tracker Sheet</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
