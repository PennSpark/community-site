import * as React from "react";

import Layout from "../../components/layout";

import "./style.css";

const AssassinsPage = () => {
  return (
    <Layout title="graveyard">
      <div id="header-section" className="content-section">
        <h1>graveyard</h1>
      </div>

      <div className="content-section" style={{ textAlign: "center" }}>
          <h2><a href="/assassins">&larr; back home</a></h2>
        <p>:0</p>
      </div>

      <div style={{ height: "30px" }} />
    </Layout>
  );
};

export default AssassinsPage;
