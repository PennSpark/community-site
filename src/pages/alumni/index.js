import * as React from "react";


import Layout from "../../components/layout";
import Profile from "../../components/profile";
import Navbar from "../../components/navbar";

import AlexanderWenig from "../../images/headshots/alexander-wenig.jpg"
import AllisonZhang from "../../images/headshots/allison-zhang.jpg"
import AlyssaNie from "../../images/headshots/alyssa-nie.jpg"
import AndrewJiang from "../../images/headshots/andrew-jiang.jpg"
import AnnaXia from "../../images/headshots/anna-xia.jpg"
import CharlesJin from "../../images/headshots/charles-jin.jpg"
import August from "../../images/headshots/august.jpg"
import ChelseaCheng from "../../images/headshots/chelsea-cheng.jpg"
import ChristianaGuan from "../../images/headshots/christiana-guan.jpg"
import ClaireZhang from "../../images/headshots/claire-zhang.jpg"
import ClyveGassant from "../../images/headshots/clyve-gassant.jpg"
import DefneTim from "../../images/headshots/defne-tim.jpg"
import DhatriMedarametla from "../../images/headshots/dhatri-medarametla.jpg"
import ElyssaChou from "../../images/headshots/elyssa.jpg"
import EricWang from "../../images/headshots/eric-wang.jpg"
import EthanZhao from "../../images/headshots/ethan-zhao.jpg"
import GraceJiang from "../../images/headshots/grace-jiang.jpg"
import GraceThang from "../../images/headshots/grace-thanglerdsumpan.jpg"
import HaleyKang from "../../images/headshots/haley-kang.png"
import IsabelleGu from "../../images/headshots/isabelle-gu.jpg"
import JamesCiardullo from "../../images/headshots/james-ciardullo.jpg"
import JaniceKim from "../../images/headshots/janice-kim.jpg"
import JasonSaito from "../../images/headshots/jason-saito.jpg"
import JimmyRen from "../../images/headshots/jimmy-ren.jpg"
import JoyceHe from "../../images/headshots/joyce-he.jpg"
import JoyceYoon from "../../images/headshots/joyce-yoon.jpg"
import KaiWang from "../../images/headshots/kai-wang.jpg"
import MalihaRahman from "../../images/headshots/maliha-rahman.jpg"
import MarcelKida from "../../images/headshots/marcel-kida.jpg"
import MatthewCho from "../../images/headshots/matthew-cho.jpg"
import MatthewDong from "../../images/headshots/matthew-dong.jpg"
import MichelleGong from "../../images/headshots/michelle-gong.jpg"
import NakyungLee from "../../images/headshots/nakyung-lee.jpg"
import NicoleZhao from "../../images/headshots/nicole-zhao.jpg"
import NwaiAlfa from "../../images/headshots/nwai-alfa.jpg"
import NamitaSajai from "../../images/headshots/namita-sajai.jpeg"
import OliviaZha from "../../images/headshots/olivia-zha.jpg"
import PaulLoh from "../../images/headshots/paul-loh.jpg"
import PraneelChakraborty from "../../images/headshots/praneel.jpg"
import RainYan from "../../images/headshots/rain-yan.jpg"
import RazaqAribidesi from "../../images/headshots/razaq-aribidesi.jpg"
import RyanDeLopez from "../../images/headshots/ryan-de-lopez.jpg"
import Sey from "../../images/headshots/sey.jpg"
import SanyaShetty from "../../images/headshots/sanya-shetty.jpg"
import SubinKim from "../../images/headshots/subin-kim.jpg"
import SydneySimon from "../../images/headshots/sydney-simon.jpg"
import TobiasNguyen from "../../images/headshots/tobias-nguyen.jpg"
import YuhanLiu from "../../images/headshots/yuhan-liu.jpg"
import YuniKim from "../../images/headshots/yuni-kim.jpg"
import ZainKhan from "../../images/headshots/zain-khan.jpg"




const IndexPage = () => {
  return (
    <Layout title="Community @ Spark">
      <div id="header-section" className="content-section">
        <h1>
          community at <span className="outline-text">spark</span>
        </h1>
        <br />
        <Navbar />
      </div>

      <div className="content-section" style={{ marginBottom: "10px" }}>
        <h2>Former Members</h2>
      </div>
      
      <div id="profiles-section">
        <div className="content-section" style={{ marginBottom: "10px" }}>
          <h3>Co-Founders</h3>
        </div>

        <Profile name="Grace 'grac' Jiang" role="Spark Co-Founder" img={GraceJiang} url="" />
        <Profile name="Olivia 'oz' Zha" role="Spark Co-Founder" img={OliviaZha} url="" />
        
      </div>

      <div id="profiles-section">
      <div className="content-section" style={{ marginBottom: "10px" }}>
          <h3>Former Members</h3>
        </div>

        {/* Former Members */}
        <Profile name="Seyram Agbotey" role="Instructor, Red Designer" img={Sey} url="https://seynhyi.github.io" />
        <Profile name="Nwai Alfa" role="Blue Developer" img={NwaiAlfa} url="" />
        <Profile name="Razaq Aribidesi" role="Blue Developer" img={RazaqAribidesi} url="" />
        <Profile name="Praneel Chakraborty" role="Red Developer" img={PraneelChakraborty} url="" />
        <Profile name="Chelsea Cheng" role="Project Lead, Instructor, Red Developer" img={ChelseaCheng} url="" />
        <Profile name="Matthew Cho" role="VP Blue, Red Developer" img={MatthewCho} url="" />
        <Profile name="Elyssa Chou" role="VP Blue, Project Lead,  Instructor" img={ElyssaChou} url="" />
        <Profile name="James Ciardullo" role="Red Developer" img={JamesCiardullo} url="" />
        <Profile name="Ryan De Lopez" role="Red Developer" img={RyanDeLopez} url="https://www.linkedin.com/in/vrdelopez/" />
        <Profile name="Matthew Dong" role="Instructor, Blue Designer" img={MatthewDong} url="" />
        <Profile name="August Fu" role="Red Developer" img={August} url="https://www.linkedin.com/in/august-fu" />
        <Profile name="Clyve Gassant" role="Blue Developer" img={ClyveGassant} url="" />
        <Profile name="Michelle Gong" role="Red Designer" img={MichelleGong} url="" />
        <Profile name="Isabelle Gu" role="Blue Designer" img={IsabelleGu} url="" />
        <Profile name="Christiana Guan" role="Instructor, Red Designer" img={ChristianaGuan} url="" />
        <Profile name="Joyce He" role="Instructor, Red Designer" img={JoyceHe} url="" />
        <Profile name="Andrew Jiang" role="Co-President, Project Lead, Red Developer" img={AndrewJiang} url="" />
        <Profile name="Charles Jin" role="Red Developer" img={CharlesJin} url="" />
        <Profile name="Haley Kang" role="Co-President, Social Chair, Red Developer, " img={HaleyKang} url="" />
        <Profile name="Zain Khan" role="Blue Developer" img={ZainKhan} url="" />
        <Profile name="Marcel Kida" role="Project Lead, Red Developer / Designer" img={MarcelKida} url="https://marcelkida.com/" />
        <Profile name="Janice Kim" role="VP External, Instructor, Design Lead, Red Designer" img={JaniceKim} url="" />
        <Profile name="Subin Kim" role="VP Red, Project Lead, Red Developer" img={SubinKim} url="" />
        <Profile name="Yuni Kim" role="Former Member" img={YuniKim} url="" />
        <Profile name="Na Lee" role="Co-President, VP Blue, Blue Developer" img={NakyungLee} url="https://leeenk.github.io/" />
        <Profile name="Paul Loh" role="Co-President, VP Red, Project Lead, Instructor, Red Developer / Designer, Blue Designer" img={PaulLoh} url="https://lohpaul9.github.io/" />
        <Profile name="Yuhan Liu" role="VP Blue, Project Lead, Instructor, Red Developer, Blue Developer" img={YuhanLiu} url="https://yuhanliu-tech.github.io/" />
        <Profile name="Dhatri Medarametla" role="Red Developer, Blue Developer" img={DhatriMedarametla} url="" />
        <Profile name="Alyssa Nie" role="Instructor, Red Developer, Blue Developer" img={AlyssaNie} url="" />
        <Profile name="Maliha Rahman" role="Blue Designer" img={MalihaRahman} url="" />
        <Profile name="Jimmy Ren" role="Co-President, Instructor, VP Internal, Red Developer" img={JimmyRen} url="" />
        <Profile name="Jason Saito" role="Red Designer, Blue Designer" img={JasonSaito} url="" />
        <Profile name="Namita Sajai" role="Marketing Chair, Red Designer" img={NamitaSajai} url="https://namitasajai.github.io/finalportfolio/index.html" />
        <Profile name="Sanya Shetty" role="Red Developer, Blue Developer" img={SanyaShetty} url="https://sanyashetty.github.io/" />
        <Profile name="Sydney Simon" role="Red Developer, Blue Developer" img={SydneySimon} url="https://www.linkedin.com/in/sydney-simon-1468b318b/" />
        <Profile name="Grace Thanglerdsumpan" role="VP External, Instructor, Red Designer" img={GraceThang} url="https://www.linkedin.com/in/chanya-thanglerdsumpan/" />
        <Profile name="Defne Tim" role="Blue Developer" img={DefneTim} url="" />
        <Profile name="Tobias Nguyen" role="Red Designer, Blue Designer" img={TobiasNguyen} url="https://www.linkedin.com/mwlite/in/tung-nguyen-95195820b" />
        <Profile name="Eric Wang" role="Instructor, Red Developer" img={EricWang} url="https://etnwang.github.io/" />
        <Profile name="Kai Wang" role="Blue Developer" img={KaiWang} url="" />
        <Profile name="Alexander Wenig" role="Red Developer" img={AlexanderWenig} url="" />
        <Profile name="Anna Xia" role="VP Internal, Project Lead, Instructor, Red Developer" img={AnnaXia} url="" />
        <Profile name="Rain Yan" role="Red Developer, Blue Designer" img={RainYan} url="" />
        <Profile name="Joyce Yoon" role="Marketing Chair, Red Designer" img={JoyceYoon} url="" />
        <Profile name="Allison Zhang" role="Red Designer, Blue Developer / Designer" img={AllisonZhang} url="" />
        <Profile name="Claire Zhang" role="Marketing Chair, Red Developer / Designer, Blue Developer" img={ClaireZhang} url="" />
        <Profile name="Ethan Zhao" role="VP Internal, Project Lead, Blue Developer" img={EthanZhao} url="https://ethanxyzhao.com/" />
        <Profile name="Nicole Zhao" role="Blue Developer" img={NicoleZhao} url="" />

        <p style={{ marginBottom: "64px" }}>Former members not pictured: Brandon Adiele*, Isabel An*, Anna Baringer, Norman Chen*, Vivienne Chen*, Charles Cheng*, Olivia Cheng*, Caroline Chin*, 
          Logan Cho*, Acelyn Choi*, Eric Dai, Julia Deng*, Bryan Denq*, Elaine Fan*, 
          Janna Goliff*, Aditya Gupta*, Leon Hertzberg*, Egret Jin*, Tinatin Kokoshvili*, Vishaal Kumar*, 
          Ahmed Laban*, Kristine Lam*, Seiyon Lee, Jiacheng Li, Will Liang, Connie Lin*, Christina Lu*, Juliana Lu*, Linda Lu*, Arush Mehrotra, Aryan Nagariya*, 
          Christy Qiu*, Mykaela Salvacion, Akshay Sharma*, Joochan Shin*, Aarushi Singh*, Lindsay Smith*,
          Arushi Srivastava*, Sonia Tam, Homer Wang,
          Shelly Wu*, Wendy Wu*, Maggie Yu*, Andrew Zhang*, David Zhang*, Helena Zhang*, Yanjie Zhang, Alexander Zheng, Karen Zheng*, Kevin Zhou

          <br />
          <br />

          *Former member of Penn Creative Labs (the previous name of Spark)

          <br />
          <br />
          
          If you are a former member and would like to be added to this page, please contact us at <a href="mailto:upennspark@gmail.com">upennspark@gmail.com</a>.
          </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
