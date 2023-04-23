import * as React from "react";

import Layout from "../components/layout";
import Profile from "../components/profile";
import Navbar from "../components/navbar";

import EthanZhao from "../images/sp23-headshots/ethan-zhao.jpg"
import JaniceKim from "../images/sp23-headshots/janice-kim.jpg"
import AndrewJiang from "../images/sp23-headshots/andrew-jiang.jpg"
import YuhanLiu from "../images/sp23-headshots/yuhan-liu.jpg"
import AcelynChoi from "../images/sp23-headshots/acelyn-choi.jpg"
import AnnaXia from "../images/sp23-headshots/anna-xia.jpg"
import ChelseaCheng from "../images/sp23-headshots/chelsea-cheng.jpg"
import ClaireZhang from "../images/sp23-headshots/claire-zhang.jpg"
import JimmyRen from "../images/sp23-headshots/jimmy-ren.jpg"
import JoyceHe from "../images/sp23-headshots/joyce-he.jpg"
import MarcelKida from "../images/sp23-headshots/marcel-kida.jpg"
import MatthewDong from "../images/sp23-headshots/matthew-dong.jpg"
import PaulLoh from "../images/sp23-headshots/paul-loh.jpg"
import RainYan from "../images/sp23-headshots/rain-yan.jpg"
import SubinKim from "../images/sp23-headshots/subin-kim.jpg"

import EricWang from "../images/sp23-headshots/eric-wang.jpg"
import SumanthKadiyala from "../images/sp23-headshots/sumanth-kadiyala.jpg"
import NakyungLee from "../images/sp23-headshots/nakyung-lee.jpg"
import YanjieZhang from "../images/sp23-headshots/yanjie-zhang.jpg"
import ClyveGassant from "../images/sp23-headshots/clyve-gassant.jpg"
import SanyaShetty from "../images/sp23-headshots/sanya-shetty.jpg"
import DhatriMedarametla from "../images/sp23-headshots/dhatri-medarametla.jpg"
import ChristianaGuan from "../images/sp23-headshots/christiana-guan.jpg"
import AllisonZhang from "../images/sp23-headshots/allison-zhang.jpg"
import ZainKhan from "../images/sp23-headshots/zain-khan.jpg"
import MatthewCho from "../images/sp23-headshots/matthew-cho.jpg"
import AlyssaNie from "../images/sp23-headshots/alyssa-nie.jpg"

import AndreVen from "../images/sp23-headshots/andre-van-de-ven.jpg"
import AprilZhang from "../images/sp23-headshots/april-zhang.jpg"
import EmilyKang from "../images/sp23-headshots/emily-kang.jpg"
import GraceThang from "../images/sp23-headshots/grace-thanglerdsumpan.jpg"
import HaleyKang from "../images/sp23-headshots/haley-kang.jpg"
import IsabelleGu from "../images/sp23-headshots/isabelle-gu.jpg"
import JamesBaker from "../images/sp23-headshots/james-baker.jpg"
import JasonSaito from "../images/sp23-headshots/jason-saito.jpg"
import JasperZhu from "../images/sp23-headshots/jasper-zhu.jpg"
import KaiWang from "../images/sp23-headshots/kai-wang.jpg"
import MalihaRahman from "../images/sp23-headshots/maliha-rahman.jpg"
import NickCirillo from "../images/sp23-headshots/nick-cirillo.jpg"
import NicoleZhao from "../images/sp23-headshots/nicole-zhao.jpg"
import NwaiAlfa from "../images/sp23-headshots/nwai-alfa.jpg"
import RazaqAribidesi from "../images/sp23-headshots/razaq-aribidesi.jpg"
import SydneySimon from "../images/sp23-headshots/sydney-simon.jpg"
import TobiasNguyen from "../images/sp23-headshots/tobias-nguyen.jpg"

import Elyssa from "../images/sp23-headshots/elyssa.jpg"
import JoyceYoon from "../images/sp23-headshots/joyce-yoon.jpg"
import Kashyap from "../images/sp23-headshots/kashyap.jpg"
import MichelleGong from "../images/sp23-headshots/michelle-gong.jpg"
import Praneel from "../images/sp23-headshots/praneel.jpg"
import RyanDeLopez from "../images/sp23-headshots/ryan-de-lopez.jpg"
import Sey from "../images/sp23-headshots/sey.jpg"
import CindyWei from "../images/sp23-headshots/cindy-wei.jpg"
import August from "../images/sp23-headshots/august.jpg"

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
        <Profile name="Acelyn Choi" role="Red Developer" img={AcelynChoi} url="http://linkedin.com/in/acelynchoi" />
        <Profile name="Allison Zhang" role="Social Member" img={AllisonZhang} url="" />
        <Profile name="Alyssa Nie" role="Blue Instructor" img={AlyssaNie} url="https://a1yssan13.github.io/personal-web/" />
        <Profile name="Andre van de Ven" role="Blue Developer" img={AndreVen} url="https://www.andrevandeven.us/"/>
        <Profile name="Andrew Jiang" role="Co-Director" img={AndrewJiang} url="https://github.com/aJayz54" />
        <Profile name="Anna Xia" role="Red Developer" img={AnnaXia} url="https://www.linkedin.com/in/anna-xia24/" />
        <Profile name="April Zhang" role="Blue Design" img={AprilZhang} url=""/>
        <Profile name="August Fu" role="Red Developer" img={August} url="https://www.linkedin.com/in/august-fu" />
        <Profile name="Barbara Seyram Nhyira Agbotey" role="Blue Designer" img={Sey} url="seynhyi.github.io" />
        <Profile name="Chelsea Cheng" role="Red Designer" img={ChelseaCheng} url="https://chelseacheng.com" />
        <Profile name="Christiana Guan" role="Blue Instructor" img={ChristianaGuan} url="https://www.linkedin.com/in/christianag/" />
        <Profile name="Cindy Wei" role="Red Developer" img={CindyWei} url="https://www.linkedin.com/in/cindy-wei-7ba778227/" />
        <Profile name="Claire Zhang" role="Social Media Chair" img={ClaireZhang} url="https://czhang020.github.io/claire-site/" />
        <Profile name="Clyve Gassant" role="Social Member" img={ClyveGassant} url="https://clyvegassant.github.io/" />
        <Profile name="Dhatri Medarametla" role="Red Developer" img={DhatriMedarametla} url="https://dmed31.github.io/sparkwebsite/" />
        <Profile name="Elyssa Chou" role="Red Developer" img={Elyssa} url="https://www.elyssachou.com/" />
        <Profile name="Emily Kang" role="Blue Developer" img={EmilyKang} url="www.linkedin.com/in/emily-kang-67b55b20a"/>
        <Profile name="Eric Wang" role="Red Developer" img={EricWang} url="https://etnwang.github.io/" />
        <Profile name="Ethan Zhao" role="Red Developer" img={EthanZhao} url="https://ethanxyzhao.com/" />
        <Profile name="Grace Thanglerdsumpan" role="Red Design" img={GraceThang} url="https://www.linkedin.com/in/chanya-thanglerdsumpan/"/>
        <Profile name="Haley Kang" role="Red Developer" img={HaleyKang} url="https://www.linkedin.com/in/hyejinkang02"/>
        <Profile name="Isabelle Gu" role="Blue Design" img={IsabelleGu} url="linkedin.com/in/isabellegu/"/>
        <Profile name="James Baker" role="Blue Developer" img={JamesBaker} url="https://www.linkedin.com/in/james-baker-4694b7206"/>   
        <Profile name="Janice Kim" role="VP External" img={JaniceKim} url="https://www.jankim.me/" />
        <Profile name="Jason Saito" role="Blue Design" img={JasonSaito} url="https://www.linkedin.com/in/jason-saito/" />
        <Profile name="Jasper Zhu" role="Red Developer" img={JasperZhu} url="https://www.linkedin.com/in/jasper-zhu-827063193" />
        <Profile name="Jimmy Ren" role="Co-Director" img={JimmyRen} url="https://www.linkedin.com/in/Jim-ren/" />
        <Profile name="Joyce He" role="Red Designer" img={JoyceHe} url="https://www.linkedin.com/in/joyce-he-1059a21b4" />
        <Profile name="Joyce Yoon" role="Red Design" img={JoyceYoon} url="https://www.linkedin.com/in/joyce-yoon-penn/" />
        <Profile name="Kai Wang" role="Blue Developer" img={KaiWang} url="www.linkedin.com/in/kai-wang-2b6a631b5" />
        <Profile name="Kashyap Chaturvedula" role="Red Developer" img={Kashyap} url="https://www.linkedin.com/in/kashyap-chaturvedula-596682162/" />
        <Profile name="Maliha Rahman" role="Blue Design" img={MalihaRahman} url="" />
        <Profile name="Marcel Kida" role="Red Developer &amp; Designer" img={MarcelKida} url="https://marcelkida.com/" />
        <Profile name="Matthew Cho" role="Red Developer" img={MatthewCho} url="https://www.linkedin.com/in/hyun-ki-cho/" />
        <Profile name="Matthew Dong" role="Social Member" img={MatthewDong} url="https://matt-dong.github.io" />
        <Profile name="Michelle Gong" role="Red Designer" img={MichelleGong} url="https://www.linkedin.com/in/michgong/" />
        <Profile name="Na Kyung Lee" role="VP Blue" img={NakyungLee} url="https://leeenk.github.io/" />
        <Profile name="Nick Cirillo" role="Blue Developer" img={NickCirillo} url="https://www.linkedin.com/in/nicholas-cirillo-/" />
        <Profile name="Nicole Zhao" role="Blue Developer" img={NicoleZhao} url="https://www.linkedin.com/in/nicole-zhao-a92153210/" />
        <Profile name="Nwai Alfa" role="Blue Design" img={NwaiAlfa} url="https://www.linkedin.com/in/nwai" />
        <Profile name="Paul Loh" role="Red Developer" img={PaulLoh} url="https://lohpaul9.github.io/" />
        <Profile name="Praneel Chakraborty" role="Red Developer" img={Praneel} url="linkedin.com/in/pchakraborty20"/>
        <Profile name="Rain Yan" role="Blue Designer" img={RainYan} url="https://github.com/xcupsilon" />
        <Profile name="Razaq Aribidesi" role="Blue Developer" img={RazaqAribidesi} url="https://www.linkedin.com/in/abudurazaqaribidesi/" />
        <Profile name="Ryan De Lopez" role="Red Developer" img={RyanDeLopez} url="https://www.linkedin.com/in/vrdelopez/" />
        <Profile name="Sanya Shetty" role="Blue Developer" img={SanyaShetty} url="https://sanyashetty.github.io/" />
        <Profile name="Subin Kim" role="VP Red" img={SubinKim} url="https://www.linkedin.com/in/subin-kim00/" />
        <Profile name="Sumanth Kadiyala" role="Red Developer" img={SumanthKadiyala} url="https://www.linkedin.com/in/sumanthkadiyala/" />
        <Profile name="Sydney Simon" role="Blue Developer" img={SydneySimon} url="https://www.linkedin.com/in/sydney-simon-1468b318b/" />
        <Profile name="Tobias Nguyen" role="Blue Design" img={TobiasNguyen} url="https://www.linkedin.com/mwlite/in/tung-nguyen-95195820b" />
        <Profile name="Yanjie Zhang" role="Blue Developer" img={YanjieZhang} url="https://yanjiez323.github.io/" />
        <Profile name="Yuhan Liu" role="Red Developer" img={YuhanLiu} url="https://yuhanliu-tech.github.io/" />
        <Profile name="Zain Khan" role="Blue Developer" img={ZainKhan} url="www.linkedin.com/in/zain-khan-upenncs" />
      </div>
    </Layout>
  );
};

export default IndexPage;
