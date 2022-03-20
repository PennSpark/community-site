import * as React from "react";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";

import "./style.css";

const HallOfFamePage = () => {
  return (
    <Layout title="Hall of Fame | Community @ Spark">
      <div id="header-section" className="content-section">
        <h1>
          <span className="outline-text">spark</span> hall of fame
        </h1>
        <br />
        <Navbar />
      </div>

      <div className="content-section">
       <h2>Spring 2022</h2>
        <br />
        <p>Winning Team: Arush's team</p>

        <h2>Fall 2021</h2>
        <br />
        <p>Winning Team: Jimmy R, Elyssa C, Marcel K, Andrew L</p>
      </div>
      <div style={{ height: "30px" }} />
    </Layout>
  );
};

export default HallOfFamePage;
