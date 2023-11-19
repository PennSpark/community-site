import * as React from "react";


import Layout from "../components/layout";
import Profile from "../components/profile";
import Navbar from "../components/navbar";


import AllisonZhang from "../images/sp23-headshots/allison-zhang.jpg"
import AlyssaNie from "../images/sp23-headshots/alyssa-nie.jpg"
import AndreVen from "../images/sp23-headshots/andre-van-de-ven.jpg"
import AndrewJiang from "../images/sp23-headshots/andrew-jiang.jpg"
import AngieCao from "../images/sp23-headshots/angie-cao.png"
import AnnaXia from "../images/sp23-headshots/anna-xia.jpg"
import AprilZhang from "../images/sp23-headshots/april-zhang.jpg"
import August from "../images/sp23-headshots/august.jpg"
import ChelseaCheng from "../images/sp23-headshots/chelsea-cheng.jpg"
import ChristianaGuan from "../images/sp23-headshots/christiana-guan.jpg"
import CindyWei from "../images/sp23-headshots/cindy-wei.jpg"
import ClaireZhang from "../images/sp23-headshots/claire-zhang.jpg"
import ClyveGassant from "../images/sp23-headshots/clyve-gassant.jpg"
import DefneTim from "../images/sp23-headshots/defne-tim.jpg"
import DhatriMedarametla from "../images/sp23-headshots/dhatri-medarametla.jpg"
import EmilyKang from "../images/sp23-headshots/emily-kang.jpg"
import EricWang from "../images/sp23-headshots/eric-wang.jpg"
import EthanZhao from "../images/sp23-headshots/ethan-zhao.jpg"
import FionaHerzog from "../images/sp23-headshots/fiona-herzog.jpg"
import GabrielThiessen from "../images/sp23-headshots/gabriel-thiessen.jpeg"
import GraceThang from "../images/sp23-headshots/grace-thanglerdsumpan.jpg"
import HaleyKang from "../images/sp23-headshots/haley-kang.png"
import IsabelleGu from "../images/sp23-headshots/isabelle-gu.jpg"
import JamesBaker from "../images/sp23-headshots/james-baker.jpg"
import JaniceKim from "../images/sp23-headshots/janice-kim.jpg"
import JasmineWang from "../images/sp23-headshots/jasmine-wang.png"
import JasonSaito from "../images/sp23-headshots/jason-saito.jpg"
import JasperZhu from "../images/sp23-headshots/jasper-zhu.jpg"
import JohnnyJeong from "../images/sp23-headshots/johnny-jeong.jpg"
import JoyceChen from "../images/sp23-headshots/joyce-chen.jpeg"
import JoyceHe from "../images/sp23-headshots/joyce-he.jpg"
import JoyceYoon from "../images/sp23-headshots/joyce-yoon.jpg"
import KaiWang from "../images/sp23-headshots/kai-wang.jpg"
import Kashyap from "../images/sp23-headshots/kashyap.jpg"
import KatherineYue from "../images/sp23-headshots/katherine-yue.jpeg"
import LukeTong from "../images/sp23-headshots/luke-tong.jpg"
import LunaChen from "../images/sp23-headshots/luna-chen.jpeg"
import MarcelKida from "../images/sp23-headshots/marcel-kida.jpg"
import MatthewCho from "../images/sp23-headshots/matthew-cho.jpg"
import MatthewDong from "../images/sp23-headshots/matthew-dong.jpg"
import NakyungLee from "../images/sp23-headshots/nakyung-lee.jpg"
import NickCirillo from "../images/sp23-headshots/nick-cirillo.jpeg"
import NondPhokasub from "../images/sp23-headshots/nond-phokasub.jpg"
import NwaiAlfa from "../images/sp23-headshots/nwai-alfa.jpg"
import PaulLoh from "../images/sp23-headshots/paul-loh.jpg"
// import RaelynnCui from "../images/sp23-headshots/raelynn-cui.jpg"
import RainYan from "../images/sp23-headshots/rain-yan.jpg"
import RafaelMartinez from "../images/sp23-headshots/raphael-martinez.png"
import RazaqAribidesi from "../images/sp23-headshots/razaq-aribidesi.jpg"
import RyanDeLopez from "../images/sp23-headshots/ryan-de-lopez.jpg"
import Sey from "../images/sp23-headshots/sey.jpg"
import SumanthKadiyala from "../images/sp23-headshots/sumanth-kadiyala.jpg"
import SanyaShetty from "../images/sp23-headshots/sanya-shetty.jpg"
// import SoniaTam from "../images/sp23-headshots/sonya-tam.jpg"

import SydneySimon from "../images/sp23-headshots/sydney-simon.jpg"
import TobiasNguyen from "../images/sp23-headshots/tobias-nguyen.jpg"
import XueJiang from "../images/sp23-headshots/xue-jiang.jpg"
import YanjieZhang from "../images/sp23-headshots/yanjie-zhang.jpg"
import YuhanLiu from "../images/sp23-headshots/yuhan-liu.jpg"

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
        <h2>Spring 2023</h2>
      </div>

      <div id="profiles-section">
        <Profile name="Allison Zhang" role="Social Member" img={AllisonZhang} url="" />
        <Profile name="Alyssa Nie" role="Red Developer" img={AlyssaNie} url="https://a1yssan13.github.io/personal-web/" />
        <Profile name="Andre van de Ven" role="Social Chair" img={AndreVen} url="https://www.andrevandeven.us/"/>
        <Profile name="Andrew Jiang" role="Red Developer" img={AndrewJiang} url="https://github.com/aJayz54" />
        <Profile name="Angie Cao" role="Red Developer" img={AngieCao} url="www.linkedin.com/in/angelina-cao-78a0551a5" />
        <Profile name="Anna Xia" role="Red Developer" img={AnnaXia} url="https://www.linkedin.com/in/anna-xia24/" />
        <Profile name="April Zhang" role="Red Design" img={AprilZhang} url=""/>
        <Profile name="August Fu" role="Red Developer" img={August} url="https://www.linkedin.com/in/august-fu" />
        <Profile name="Barbara Seyram Nhyira Agbotey" role="Red Designer" img={Sey} url="https://seynhyi.github.io" />
        <Profile name="Chelsea Cheng" role="Red Designer" img={ChelseaCheng} url="https://chelseacheng.com" />
        <Profile name="Christiana Guan" role="Red Designer" img={ChristianaGuan} url="https://www.linkedin.com/in/christianag/" />
        <Profile name="Cindy Wei" role="Red Developer" img={CindyWei} url="https://www.linkedin.com/in/cindy-wei-7ba778227/" />
        <Profile name="Claire Zhang" role="Social Member" img={ClaireZhang} url="https://czhang020.github.io/claire-site/" />
        <Profile name="Clyve Gassant" role="Social Member" img={ClyveGassant} url="https://clyvegassant.github.io/" />
        <Profile name="Defne Tim" role="Blue Developer" img={DefneTim} url="linkedin.com/in/defne-tim-b61b7126b" />
        <Profile name="Dhatri Medarametla" role="Red Developer" img={DhatriMedarametla} url="https://dmed31.github.io/sparkwebsite/" />
        <Profile name="Emily Kang" role="Red Developer" img={EmilyKang} url="https://www.linkedin.com/in/emily-kang-67b55b20a"/>
        <Profile name="Eric Wang" role="Social Member" img={EricWang} url="https://etnwang.github.io/" />
        <Profile name="Ethan Zhao" role="Social Member" img={EthanZhao} url="https://ethanxyzhao.com/" />
        <Profile name="Fiona Herzog" role="Blue Designer" img={FionaHerzog} url="" />
        <Profile name="Gabriel Thiessen" role="Blue Developer" img={GabrielThiessen} url="https://github.com/bingberpbuck" />
        <Profile name="Grace Thanglerdsumpan" role="External VP" img={GraceThang} url="https://www.linkedin.com/in/chanya-thanglerdsumpan/"/>
        <Profile name="Haley Kang" role="Co-director" img={HaleyKang} url="https://www.linkedin.com/in/hyejinkang02"/>
        <Profile name="Isabelle Gu" role="Red Design" img={IsabelleGu} url="https://www.linkedin.com/in/isabellegu/"/>
        <Profile name="James Baker" role="Red Developer" img={JamesBaker} url="https://www.linkedin.com/in/james-baker-4694b7206"/>   
        <Profile name="Janice Kim" role="Social Chair" img={JaniceKim} url="https://www.jankim.me/" />
        <Profile name="Jasmine Wang" role="Red Design" img={JasmineWang} url="https://jasminewangux.com/" />
        <Profile name="Jason Saito" role="Red Design" img={JasonSaito} url="https://www.linkedin.com/in/jason-saito/" />
        <Profile name="Jasper Zhu" role="Red Developer" img={JasperZhu} url="https://www.linkedin.com/in/jasper-zhu-827063193" />
        <Profile name="Johhny Jeong" role="Red Developer" img={JohnnyJeong} url="https://www.linkedin.com/in/jaeheon-jeong-ab0761223" />
        <Profile name="Joyce Chen" role="Red Designer" img={JoyceChen} url="https://joycezchen.myportfolio.com/work" />
        <Profile name="Joyce He" role="Red Designer" img={JoyceHe} url="https://www.linkedin.com/in/joyce-he-1059a21b4" />
        <Profile name="Joyce Yoon" role="Design Chair" img={JoyceYoon} url="https://www.linkedin.com/in/joyce-yoon-penn/" />
        <Profile name="Kai Wang" role="Social Member" img={KaiWang} url="https://www.linkedin.com/in/kai-wang-2b6a631b5" />
        <Profile name="Kashyap Chaturvedula" role="Internal VP" img={Kashyap} url="https://www.linkedin.com/in/kashyap-chaturvedula-596682162/" />
        <Profile name="Katherine Yue" role="Blue Developer" img={KatherineYue} url="https://www.linkedin.com/in/katherine-yue/" />
        <Profile name="Luke Tong" role="Red Developer" img={LukeTong} url="https://www.linkedin.com/in/luke-rt/" />
        <Profile name="Luna Chen" role="Blue Developer" img={LunaChen} url="https://www.linkedin.com/in/luna-chen-9246501b0/" />
        <Profile name="Marcel Kida" role="Social Member" img={MarcelKida} url="https://marcelkida.com/" />
        <Profile name="Matthew Cho" role="Blue VP" img={MatthewCho} url="https://www.linkedin.com/in/hyun-ki-cho/" />
        <Profile name="Matthew Dong" role="Social Member" img={MatthewDong} url="https://matt-dong.github.io" />
        <Profile name="Na Kyung Lee" role="Co-director" img={NakyungLee} url="https://leeenk.github.io/" />
        <Profile name="Nick Cirillo" role="Blue VP" img={NickCirillo} url="https://www.linkedin.com/in/nicholas-cirillo-/" />
        <Profile name="Nond Phokasub" role="Blue Designer" img={NondPhokasub} url="https://bynond.com/" />
        <Profile name="Nwai Alfa" role="Red Design" img={NwaiAlfa} url="https://www.linkedin.com/in/nwai" />
        <Profile name="Paul Loh" role="Red VP" img={PaulLoh} url="https://lohpaul9.github.io/" />
        <Profile name="Rain Yan" role="Social Member" img={RainYan} url="https://github.com/xcupsilon" />
        <Profile name="Rafael Martinez" role="Blue Developer" img={RafaelMartinez} url="" />
        <Profile name="Razaq Aribidesi" role="Social Member" img={RazaqAribidesi} url="https://www.linkedin.com/in/abudurazaqaribidesi/" />
        <Profile name="Ryan De Lopez" role="Red Developer" img={RyanDeLopez} url="https://www.linkedin.com/in/vrdelopez/" />
        <Profile name="Sanya Shetty" role="Red Developer" img={SanyaShetty} url="https://sanyashetty.github.io/" />
        <Profile name="Sumanth Kadiyala" role="Social Member" img={SumanthKadiyala} url="https://www.linkedin.com/in/sumanthkadiyala/" />
        <Profile name="Sydney Simon" role="Red Developer" img={SydneySimon} url="https://www.linkedin.com/in/sydney-simon-1468b318b/" />
        <Profile name="Tobias Nguyen" role="Red Design" img={TobiasNguyen} url="https://www.linkedin.com/mwlite/in/tung-nguyen-95195820b" />
        <Profile name="Xue Jiang" role="Blue Developer" img={XueJiang} url="https://xue-portfolio.vercel.app/" />
        <Profile name="Yanjie Zhang" role="Social Member" img={YanjieZhang} url="https://yanjiez323.github.io/" />
        <Profile name="Yuhan Liu" role="Social Member" img={YuhanLiu} url="https://yuhanliu-tech.github.io/" />
      </div>
    </Layout>
  );
};

export default IndexPage;
