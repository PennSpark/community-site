import * as React from "react";

import Layout from "../../components/layout";
import "./style.css";

const DirectoryPage = () => {
  return (
    <Layout title="Directory | Community @ Spark">
      <div id="header-section" className="content-section">
        <h1>
          community at <span className="outline-text">spark</span>
        </h1>
        <br />
        <a href="https://pennspark.org/">
          <button>&larr; Main Site</button>
        </a>
        <a style={{ marginLeft: "20px" }} href="/">
          <button>Current Members</button>
        </a>
      </div>

      <div className="content-section">
        <h2>Fall 2021</h2>
        <br />
        <div className="directory-blob">
          <h3 className="board-title">Board</h3>
          <p>
            <span className="bold">Directors</span>: Olivia Zha &amp; Grace
            Jiang
            <br />
            <span className="bold">VP Internal</span>: Jimmy Ren
            <br />
            <span className="bold">VP External</span>: Janice Kim
            <br />
            <span className="bold">VP Red</span>: Akshay Sharma
            <br />
            <span className="bold">VP Blue</span>: Elyssa Chou
            <br />
          </p>
        </div>
        <div style={{ width: "4%", display: "inline-block" }} />

        <div className="directory-blob">
          <h3 className="red-title">Red</h3>
          <p>
            <span className="bold">Project Leads</span>:<br />
            Acelyn Choi, Anna Xia, Marcel Kida, Subin Kim
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            Alexander Zheng, Andrew Jiang, David Zhang, Jiacheng Li, Kevin Zhou
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Chelsea Cheng, Isabel An, Joyce He, Julia Deng
          </p>
        </div>
        <div style={{ width: "4%", display: "inline-block" }} />

        <div className="directory-blob">
          <h3 className="blue-title">Blue</h3>
          <p>
            <span className="bold">Developers</span>:<br />
            Anna Baringer, Arush Mehrotra, Arushi Srivastava, Claire Zhang,
            Elaine Fan, Ethan Zhao, Homer Wang, James Ciardullo, Will Liang,
            Rain Yan, Yuhan Liu
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Matthew Dong, Paul Kwok Eu Loh, Seiyon Lee
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default DirectoryPage;
