import * as React from "react";

import Layout from "../../components/layout";
import Navbar from "../../components/navbar"

import "./style.css";

const DirectoryPage = () => {
  return (
    <Layout title="Directory | Community @ Spark">
      <div id="header-section" className="content-section">
        <h1>
          community at <span className="outline-text">spark</span>
        </h1>
        <br />
        <Navbar />
      </div>

      <div className="content-section">
        <h2>Fall 2021</h2>
        <br />
        <div className="directory-blob">
          <h3 className="board-title">Board</h3>
          <p>
            <span className="bold">Directors</span>: Grace Jiang, Olivia Zha
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
            Acelyn Choi, Anna Xia, Janice Kim, Marcel Kida, Subin Kim
            <br />
            <br />
            <span className="bold">Developers</span>:<br />
            Alexander Zheng, Andrew Jiang, David Zhang, Jiacheng Li, Kevin Zhou,
            Marcel Kida
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Chelsea Cheng, Isabel An, Janice Kim, Joyce He, Julia Deng, Marcel Kida
          </p>
        </div>
        <div style={{ width: "4%", display: "inline-block" }} />

        <div className="directory-blob">
          <h3 className="blue-title">Blue</h3>
          <p>
            <span className="bold">Instructors</span>:<br />
            Akshay Sharma, Christina Lu, Elyssa Chou, Grace Jiang, Janice Kim
            <br />
            <br />
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

      <div className="content-section">
        <h2>Spring 2021</h2>
        <br />
        <div className="directory-blob-2">
          <h3 className="board-title">Board</h3>
          <p>
            <span className="bold">Directors</span>: Grace Jiang, Olivia Zha
            <br />
            <span className="bold">VP Internal</span>: Christina Lu
            <br />
            <span className="bold">Tech Leads</span>: Akshay Sharma, Joochan
            Shin
            <br />
            <span className="bold">Design Leads</span>: Elyssa Chou, Janice Kim
            <br />
            <span className="bold">Social Chair</span>: Olivia Cheng
          </p>
        </div>

        <div style={{ width: "4%", display: "inline-block" }} />

        <div className="directory-blob-2">
          <h3 className="blue-title">General Members</h3>
          <p>
            <span className="bold">Developers</span>:<br />
            Aarushi Singh, Acelyn Choi, Aditya Gupta, Ahmed Laban, Andrew Zhang, 
            Arushi Srivastava, Aryan Nagariya, Brandon Adiele, Bryan Denq, Charles Cheng,
            David Zhang, Egret Jin, Elaine Fan, Helena Zhang, Janna Goliff, Jimmy Ren, 
            Leon Hertzberg, Logan Cho, Lindsay Smith, Linda Lu, Maggie Yu, 
            Norman Chen, Subin Kim, Tinatin Kokoshvili, Vishaal Kumar, Wendy Wu,
            Shelly Wu
            <br />
            <br />
            <span className="bold">Designers</span>:<br />
            Caroline Chin, Christy Qiu, Connie Lin, Isabel An, Julia Deng,
            Juliana Lu, Karen Zheng, Kristine Lam, Vivienne Chen
          </p>
        </div>
      </div>

      <div style={{height: "30px"}} />
    </Layout>
  );
};

export default DirectoryPage;
