import * as React from "react";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ExternalLink from "../../components/ExternalLink";

import RulesPdf from "./Assassins_Rules.pdf"

import "./style.css";

const AssassinsPage = () => {
  return (
    <Layout title="Assassins | Community @ Spark">
      <div id="header-section" className="content-section">
        <h1>signal x spark assassins</h1>
        {/* <br />
        <Navbar /> */}
      </div>

      <div className="content-section" style={{ textAlign: "center" }}>
        <div style={{ fontSize: "2rem", lineHeight: "160%" }}>
          <p>This site is still a wip! Please check back EOD</p>
          <p><ExternalLink href={RulesPdf}>Game Rules &rarr;</ExternalLink></p>
          <p><a href="graveyard">Graveyard &rarr;</a></p>
        </div>
      </div>

      <div style={{ height: "30px" }} />
    </Layout>
  );
};

export default AssassinsPage;
