import * as React from "react";

import Layout from "../components/layout";
import Profile from "../components/profile";

import GraceJiang from "../images/headshots/gracejiang.jpg"
import ChristinaLu from "../images/headshots/christinalu.jpg"
import EthanZhao from "../images/headshots/ethanzhao.jpg"
import JaniceKim from "../images/headshots/janicekim.jpg"
import AndrewJiang from "../images/headshots/andrewjiang.jpg"
import YuhanLiu from "../images/headshots/yuhanliu.jpg"
import OliviaZha from "../images/headshots/oliviazha.jpg"

const IndexPage = () => {
  return (
    <Layout title="Community @ Spark">
      <div id="header-section" className="content-section">
        <h1>
          community at <span className="outline-text">spark</span>
        </h1>
        <br/>
        <a href="https://pennspark.org/"><button>&larr; Main Site</button></a>
        <a style={{marginLeft: "20px"}} href="/directory"><button>All Members</button></a>
      </div>

      <div className="content-section">
        <h2>Spring 2022</h2>
      </div>
      
      <div id="profiles-section">
        <Profile name="Grace Jiang" role="Co-Director" img={GraceJiang} url="https://www.linkedin.com/in/gracj/"/>
        <Profile name="Christina Lu" role="Co-Director" img={ChristinaLu} url="https://www.linkedin.com/in/christinaxlu/" />
        <Profile name="Ethan Zhao" role="VP Internal" img={EthanZhao} url="https://exyzhao.github.io/" />
        <Profile name="Janice Kim" role="VP External" img={JaniceKim} url="https://janicek1m.github.io/" />
        <Profile name="Andrew Jiang" role="VP Red" img={AndrewJiang} url="https://github.com/aJayz54" />
        <Profile name="Yuhan Liu" role="VP Blue" img={YuhanLiu} url="https://yuhanliu-tech.github.io/" />
        <Profile name="Olivia Zha" role="Design Instructor" img={OliviaZha} url="https://oliviazha.me/" />
      </div>
    </Layout>
  );
};

export default IndexPage;
