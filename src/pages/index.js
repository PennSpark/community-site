import * as React from "react";

import Layout from "../components/layout";
import Profile from "../components/profile";
import Navbar from "../components/navbar";

import GraceJiang from "../images/sp22-headshots/grace-jiang.jpg"
import ChristinaLu from "../images/sp22-headshots/christina-lu.jpg"
import EthanZhao from "../images/sp22-headshots/ethan-zhao.jpg"
import JaniceKim from "../images/sp22-headshots/janice-kim.jpg"
import AndrewJiang from "../images/sp22-headshots/andrew-jiang.jpg"
import YuhanLiu from "../images/sp22-headshots/yuhan-liu.jpg"
import OliviaZha from "../images/sp22-headshots/olivia-zha.jpg"
import AcelynChoi from "../images/sp22-headshots/acelyn-choi.jpg"
import AnnaBaringer from "../images/sp22-headshots/anna-baringer.jpg"
import AnnaXia from "../images/sp22-headshots/anna-xia.jpg"
import ChelseaCheng from "../images/sp22-headshots/chelsea-cheng.jpg"
import ClaireZhang from "../images/sp22-headshots/claire-zhang.jpg"
import JamesCiardullo from "../images/sp22-headshots/james-ciardullo.jpg"
import JimmyRen from "../images/sp22-headshots/jimmy-ren.jpg"
import JoyceHe from "../images/sp22-headshots/joyce-he.jpg"
import MarcelKida from "../images/sp22-headshots/marcel-kida.jpg"
import MatthewDong from "../images/sp22-headshots/matthew-dong.jpg"
import PaulLoh from "../images/sp22-headshots/paul-loh.jpg"
import RainYan from "../images/sp22-headshots/rain-yan.jpg"
import SubinKim from "../images/sp22-headshots/subin-kim.jpg"

import EricWang from "../images/sp22-headshots/eric-wang.jpg"
import ArushMehrotra from "../images/sp22-headshots/arush-mehrotra.jpg"
import SumanthKadiyala from "../images/sp22-headshots/sumanth-kadiyala.jpg"
import EmilyGuo from "../images/sp22-headshots/emily-guo.jpg"
import NakyungLee from "../images/sp22-headshots/nakyung-lee.jpg"
import YanjieZhang from "../images/sp22-headshots/yanjie-zhang.jpg"
import EricDai from "../images/sp22-headshots/eric-dai.jpg"
import MykaelaSalvacion from "../images/sp22-headshots/mykaela-salvacion.jpg"
import ClyveGassant from "../images/sp22-headshots/clyve-gassant.jpg"
import SanyaShetty from "../images/sp22-headshots/sanya-shetty.jpg"
import DhatriMedarametla from "../images/sp22-headshots/dhatri-medarametla.jpg"
import ChristianaGuan from "../images/sp22-headshots/christiana-guan.jpg"
import AllisonZhang from "../images/sp22-headshots/allison-zhang.jpg"
import ZainKhan from "../images/sp22-headshots/zain-khan.jpg"
import MatthewCho from "../images/sp22-headshots/matthew-cho.jpg"
import AlyssaNie from "../images/sp22-headshots/alyssa-nie.jpg"

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
        <h2>Fall 2022</h2>
      </div>

      <div id="profiles-section">
        <Profile name="Acelyn Choi" role="Red Developer" img={AcelynChoi} url="http://linkedin.com/in/acelynchoi" />
        <Profile name="Allison Zhang" role="Blue Designer" img={AllisonZhang} url="" />
        <Profile name="Alyssa Nie" role="Blue Developer" img={AlyssaNie} url="https://a1yssan13.github.io/personal-web/" />
        <Profile name="Andrew Jiang" role="Co-Director" img={AndrewJiang} url="https://github.com/aJayz54" />
        <Profile name="Anna Baringer" role="Red Developer" img={AnnaBaringer} url="https://www.linkedin.com/in/anna-baringer-040bba9b/" />
        <Profile name="Anna Xia" role="Red Developer" img={AnnaXia} url="https://www.linkedin.com/in/anna-xia24/" />
        <Profile name="Arush Mehrotra" role="Red Developer" img={ArushMehrotra} url="https://www.linkedin.com/in/arush-mehrotra/" />
        <Profile name="Chelsea Cheng" role="Red Designer" img={ChelseaCheng} url="https://chelseacheng.com" />
        <Profile name="Christiana Guan" role="Blue Designer" img={ChristianaGuan} url="https://www.linkedin.com/in/christianag/" />
        <Profile name="Claire Zhang" role="Red Developer" img={ClaireZhang} url="https://czhang020.github.io/claire-site/" />
        <Profile name="Clyve Gassant" role="Blue Developer" img={ClyveGassant} url="https://clyvegassant.github.io/" />
        <Profile name="Dhatri Medarametla" role="Blue Developer" img={DhatriMedarametla} url="https://dmed31.github.io/sparkwebsite/" />
        <Profile name="Eric Dai" role="Red Designer" img={EricDai} url="https://ericdai.org/" />
        <Profile name="Eric Wang" role="Red Developer" img={EricWang} url="https://etnwang.github.io/" />
        <Profile name="Ethan Zhao" role="VP Internal" img={EthanZhao} url="https://ethanxyzhao.com/" />
        <Profile name="James Ciardullo" role="Red Developer" img={JamesCiardullo} url="https://jciardullo.github.io/" />
        <Profile name="Janice Kim" role="VP External" img={JaniceKim} url="https://www.jankim.me/" />
        <Profile name="Jimmy Ren" role="Co-Director" img={JimmyRen} url="https://www.linkedin.com/in/Jim-ren/" />
        <Profile name="Joyce He" role="Red Designer" img={JoyceHe} url="https://www.linkedin.com/in/joyce-he-1059a21b4" />
        <Profile name="Marcel Kida" role="Red Developer &amp; Designer" img={MarcelKida} url="https://marcelkida.com/" />
        <Profile name="Matthew Cho" role="Red Developer" img={MatthewCho} url="https://www.linkedin.com/in/hyun-ki-cho/" />
        <Profile name="Matthew Dong" role="Development Instructor" img={MatthewDong} url="https://matt-dong.github.io" />
        <Profile name="Mykaela Salvacion" role="Blue Designer" img={MykaelaSalvacion} url="https://www.linkedin.com/in/mykaela-salvacion/" />
        <Profile name="Na Kyung Lee" role="VP Blue" img={NakyungLee} url="https://leeenk.github.io/" />
        <Profile name="Paul Loh" role="Red Developer" img={PaulLoh} url="https://lohpaul9.github.io/" />
        <Profile name="Rain Yan" role="Blue Designer" img={RainYan} url="https://github.com/xcupsilon" />
        <Profile name="Sanya Shetty" role="Blue Developer" img={SanyaShetty} url="https://sanyashetty.github.io/" />
        <Profile name="Subin Kim" role="VP Red" img={SubinKim} url="https://www.linkedin.com/in/subin-kim00/" />
        <Profile name="Sumanth Kadiyala" role="Red Developer" img={SumanthKadiyala} url="https://www.linkedin.com/in/sumanthkadiyala/" />
        <Profile name="Yuhan Liu" role="VP Blue" img={YuhanLiu} url="https://yuhanliu-tech.github.io/" />
        <Profile name="Yanjie Zhang" role="Blue Developer" img={YanjieZhang} url="https://yanjiez323.github.io/" />
        <Profile name="Zain Khan" role="Blue Developer" img={ZainKhan} url="www.linkedin.com/in/zain-khan-upenncs" />
      </div>
    </Layout>
  );
};

export default IndexPage;
