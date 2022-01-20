import * as React from "react";

import Layout from "../components/layout";
import Profile from "../components/profile";

import Navbar from "../components/navbar";

import GraceJiang from "../images/headshots/grace-jiang.jpg"
import ChristinaLu from "../images/headshots/christina-lu.jpg"
import EthanZhao from "../images/headshots/ethan-zhao.jpg"
import JaniceKim from "../images/headshots/janice-kim.jpg"
import AndrewJiang from "../images/headshots/andrew-jiang.jpg"
import YuhanLiu from "../images/headshots/yuhan-liu.jpg"
import OliviaZha from "../images/headshots/olivia-zha.jpg"
import AcelynChoi from "../images/headshots/acelyn-choi.jpg"
import AkshaySharma from "../images/headshots/akshay-sharma.jpg"
import AlexZheng from "../images/headshots/alex-zheng.jpg"
import AnnaBaringer from "../images/headshots/anna-baringer.jpg"
import AnnaXia from "../images/headshots/anna-xia.jpg"
import ChelseaCheng from "../images/headshots/chelsea-cheng.jpg"
import ClaireZhang from "../images/headshots/claire-zhang.jpg"
import JamesCiardullo from "../images/headshots/james-ciardullo.jpg"
import JimmyRen from "../images/headshots/jimmy-ren.jpg"
import JoyceHe from "../images/headshots/joyce-he.jpg"
import MarcelKida from "../images/headshots/marcel-kida.jpg"
import MatthewDong from "../images/headshots/matthew-dong.jpg"
import PaulLoh from "../images/headshots/paul-loh.jpg"
import RainYan from "../images/headshots/rain-yan.jpg"
import SeiyonLee from "../images/headshots/seiyon-lee.jpg"
import SubinKim from "../images/headshots/subin-kim.jpg"

const IndexPage = () => {
  return (
    <Layout title="Community @ Spark">
      <div id="header-section" className="content-section">
        <h1>
          community at <span className="outline-text">spark</span>
        </h1>
        <br/>
        <Navbar />
      </div>

      <div className="content-section" style={{marginBottom: "10px"}}>
        <h2>Spring 2022</h2>
      </div>
      
      <div id="profiles-section">
        <Profile name="Acelyn Choi" role="Red Developer" img={AcelynChoi} url="http://linkedin.com/in/acelynchoi" />
        <Profile name="Akshay Sharma" role="Development Instructor" img={AkshaySharma} url="https://akshaysharma.dev/" />
        <Profile name="Alex Zheng" role="Red Developer" img={AlexZheng} url="https://www.linkedin.com/in/alexanderzheng1218/" />
        <Profile name="Andrew Jiang" role="VP Red" img={AndrewJiang} url="https://github.com/aJayz54" />
        <Profile name="Anna Baringer" role="Red Developer" img={AnnaBaringer} url="https://www.linkedin.com/in/anna-baringer-040bba9b/" />
        <Profile name="Anna Xia" role="Red Developer" img={AnnaXia} url="https://www.linkedin.com/in/anna-xia24/" />
        <Profile name="Chelsea Cheng" role="Red Designer" img={ChelseaCheng} url="https://chelseacheng.com" />
        <Profile name="Christina Lu" role="Co-Director" img={ChristinaLu} url="https://www.linkedin.com/in/christinaxlu/" />
        <Profile name="Claire Zhang" role="Red Developer" img={ClaireZhang} url="https://czhang020.github.io/claire-site/" />
        <Profile name="Ethan Zhao" role="VP Internal" img={EthanZhao} url="https://exyzhao.github.io/" />
        <Profile name="Grace Jiang" role="Co-Director" img={GraceJiang} url="https://gracejiang.me/" />
        <Profile name="James Ciardullo" role="Red Developer" img={JamesCiardullo} url="https://jciardullo.github.io/" />
        <Profile name="Janice Kim" role="VP External" img={JaniceKim} url="https://www.jankim.me/" /> 
        <Profile name="Jimmy Ren" role="Development Instructor" img={JimmyRen} url="https://www.linkedin.com/in/Jim-ren/" />
        <Profile name="Joyce He" role="Red Designer" img={JoyceHe} url="https://www.linkedin.com/in/joyce-he-1059a21b4" />
        <Profile name="Marcel Kida" role="Red Developer &amp; Designer" img={MarcelKida} url="https://marcelkida.com/" />
        <Profile name="Matthew Dong" role="Development Instructor" img={MatthewDong} url="https://matt-dong.github.io" />
        <Profile name="Olivia Zha" role="Design Instructor" img={OliviaZha} url="https://oliviazha.me/" />
        <Profile name="Paul Loh" role="Red Developer" img={PaulLoh} url="https://lohpaul9.github.io/" />
        <Profile name="Rain Yan" role="Blue Designer" img={RainYan} url="https://github.com/xcupsilon" />
        <Profile name="Seiyon Lee" role="Red Designer" img={SeiyonLee} />
        <Profile name="Subin Kim" role="Red Developer" img={SubinKim} url="https://www.linkedin.com/in/subin-kim00/" />
        <Profile name="Yuhan Liu" role="VP Blue" img={YuhanLiu} url="https://yuhanliu-tech.github.io/" />

      </div>
    </Layout>
  );
};

export default IndexPage;
