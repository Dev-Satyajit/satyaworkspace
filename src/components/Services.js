import React, { useState } from "react";
import "./Services.css";
// import { Helmet } from "react-helmet";
export default function Services() {
  const [state1, setState1] = useState("active");
  const [state2, setState2] = useState("");
  const [toggler, setSoggler] = useState({ left: "0" });
  const [active11, setActive11] = useState({ color: "blueviolet" });
  const [active22, setActive22] = useState({ color: "#555" });
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var d = new Date();
  var monthName = months[d.getMonth()];

  const setActive1 = () => {
    setState1("active");
    setState2("");
    setSoggler({
      left: "0",
    });
    setActive11({
      color: "blueviolet",
    });
    setActive22({
      color: "#555",
    });
  };
  const setActive2 = () => {
    setState2("active");
    setState1("");
    setSoggler({
      left: "50%",
    });
    setActive11({
      color: "#555",
    });
    setActive22({
      color: "blueviolet",
    });
  };

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
          <div className="sec-toggler">
            <div className="tg" style={toggler}></div>
            <button
              className="btn sheets"
              onClick={setActive1}
              style={active11}
            >
              Sheets
            </button>
            <button className="btn tools" onClick={setActive2} style={active22}>
              Tools
            </button>
          </div>
          <ul className={`service-menu sheet-menu ${state1}`}>
            <li className="service-item">
              <a
                href="https://docs.google.com/spreadsheets/d/1_Tfy236aj3aip8qfJ0pbfNyzaPsKikl81uPUj_RA6Mw"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-file-alt"></i> Work Sheet
              </a>
            </li>
            <li className="service-item">
              <a
                href="https://docs.google.com/spreadsheets/d/1y5NXKMgCgbNuUTYeMnbk2KGJ_lSfvCp1ZGNh2NEvpnU"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-file-alt"></i> Priority Sheet
              </a>
            </li>
            <li className="service-item">
              <a
                href="https://docs.google.com/spreadsheets/d/1UQ-Sis33M6iDJx4vJwnvUwyBJLjHSczmyrdmhfWXF4g"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-file-alt"></i> Count Sheet
              </a>
            </li>
            <li className="service-item">
              <a
                href="https://docs.google.com/spreadsheets/d/1uCUTpCGl0Jd7koI1fok8ft4UT_d1B6Ina_-tP2aD1kU"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-file-alt"></i> Audit Sheet
              </a>
            </li>
            <li className="service-item">
              <a
                href="https://docs.google.com/spreadsheets/d/1idFo5miNhCmsjIusixpzXZi3YXe7DIWAjHwRzl-jYgY"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-file-alt"></i> Hourly Audit Sheet
              </a>
            </li>
            <li className="service-item">
              <a
                href="https://docs.google.com/spreadsheets/d/17YnMFcqDIgw6c4P7VDiYVRbFa1eygn6dbbE2wcqSdxk"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-file-alt"></i> Call Tracker Sheet
              </a>
            </li>
          </ul>
          <ul className={`service-menu tool-menu ${state2}`}>
            <li className="service-item">
              <a
                href="https://mail.google.com"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fas fa-envelope-open-text"></i> Gmail
              </a>
            </li>
            <li className="service-item">
              <a
                href="https://docs.google.com"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="far fa-file-alt"></i> Google Docs
              </a>
            </li>
            <li className="service-item">
              <a
                href="https://drive.google.com/drive/folders/1LWbDBTLu0dxUBF2rzmzMCrjQ4L44ZQ_1"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-google-drive"></i> {monthName} Drive
              </a>
            </li>
            <li className="service-item">
              <a
                href="https://lg51rb1td3.labeling.us-west-2.sagemaker.aws"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-aws"></i> Sagemaker West
              </a>
            </li>
            <li className="service-item">
              <a
                href="https://t5y7v24dx4.labeling.ap-south-1.sagemaker.aws"
                className="service-link"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-aws"></i> Sagemaker South
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
