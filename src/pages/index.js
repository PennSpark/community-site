import * as React from "react";

import Layout from "../components/layout";
import Profile from "../components/profile";
import Navbar from "../components/navbar";

import EthanZhao from "../images/sp22-headshots/ethan-zhao.jpg"
import JaniceKim from "../images/sp22-headshots/janice-kim.jpg"
import AndrewJiang from "../images/sp22-headshots/andrew-jiang.jpg"
import YuhanLiu from "../images/sp22-headshots/yuhan-liu.jpg"
import AcelynChoi from "../images/sp22-headshots/acelyn-choi.jpg"
import AnnaXia from "../images/sp22-headshots/anna-xia.jpg"
import ChelseaCheng from "../images/sp22-headshots/chelsea-cheng.jpg"
import ClaireZhang from "../images/sp22-headshots/claire-zhang.jpg"
import JimmyRen from "../images/sp22-headshots/jimmy-ren.jpg"
import JoyceHe from "../images/sp22-headshots/joyce-he.jpg"
import MarcelKida from "../images/sp22-headshots/marcel-kida.jpg"
import MatthewDong from "../images/sp22-headshots/matthew-dong.jpg"
import PaulLoh from "../images/sp22-headshots/paul-loh.jpg"
import RainYan from "../images/sp22-headshots/rain-yan.jpg"
import SubinKim from "../images/sp22-headshots/subin-kim.jpg"

import EricWang from "../images/sp22-headshots/eric-wang.jpg"
import SumanthKadiyala from "../images/sp22-headshots/sumanth-kadiyala.jpg"
import NakyungLee from "../images/sp22-headshots/nakyung-lee.jpg"
import YanjieZhang from "../images/sp22-headshots/yanjie-zhang.jpg"
import ClyveGassant from "../images/sp22-headshots/clyve-gassant.jpg"
import SanyaShetty from "../images/sp22-headshots/sanya-shetty.jpg"
import DhatriMedarametla from "../images/sp22-headshots/dhatri-medarametla.jpg"
import ChristianaGuan from "../images/sp22-headshots/christiana-guan.jpg"
import AllisonZhang from "../images/sp22-headshots/allison-zhang.jpg"
import ZainKhan from "../images/sp22-headshots/zain-khan.jpg"
import MatthewCho from "../images/sp22-headshots/matthew-cho.jpg"
import AlyssaNie from "../images/sp22-headshots/alyssa-nie.jpg"

import AlexWenig from "../images/sp22-headshots/alexander-wenig.jpg"
import AndreVen from "../images/sp22-headshots/andre-van-de-ven.jpg"
import AprilZhang from "../images/sp22-headshots/april-zhang.jpg"
import AthenaHo from "../images/sp22-headshots/athena-ho.jpg"
import EmilyKang from "../images/sp22-headshots/emily-kang.jpg"
import GraceThang from "../images/sp22-headshots/grace-thanglerdsumpan.jpg"
import HaleyKang from "../images/sp22-headshots/haley-kang.jpg"
import IsabelleGu from "../images/sp22-headshots/isabelle-gu.jpg"
import JamesBaker from "../images/sp22-headshots/james-baker.jpg"
import JasonSaito from "../images/sp22-headshots/jason-saito.jpg"
import JasperZhu from "../images/sp22-headshots/jasper-zhu.jpg"
import KaiWang from "../images/sp22-headshots/kai-wang.jpg"
import KristineLam from "../images/sp22-headshots/kristine-lam.jpg"
import MalihaRahman from "../images/sp22-headshots/maliha-rahman.jpg"
import NickCirillo from "../images/sp22-headshots/nick-cirillo.jpg"
import NicoleZhao from "../images/sp22-headshots/nicole-zhao.jpg"
import NwaiAlfa from "../images/sp22-headshots/nwai-alfa.jpg"
import RazaqAribidesi from "../images/sp22-headshots/razaq-aribidesi.jpg"
import SydneySimon from "../images/sp22-headshots/sydney-simon.jpg"
import TobiasNguyen from "../images/sp22-headshots/tobias-nguyen.jpg"
import YuniKim from "../images/sp22-headshots/yuni-kim.jpg"

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
        <h2>Spring 2022</h2>
      </div>

      <div id="profiles-section">
        <Profile name="Acelyn Choi" role="Red Developer" img={AcelynChoi} url="http://linkedin.com/in/acelynchoi" />
        <Profile name="Alex Wenig" role="Blue Design" img={AlexWenig} url="https://www.linkedin.com/in/alexander-wenig25/"/>
        <Profile name="Allison Zhang" role="Blue Designer" img={AllisonZhang} url="" />
        <Profile name="Alyssa Nie" role="Blue Developer" img={AlyssaNie} url="https://a1yssan13.github.io/personal-web/" />
        <Profile name="Andre van de Ven" role="Blue Developer" img={AndreVen} url="https://www.andrevandeven.us/"/>
        <Profile name="Andrew Jiang" role="Co-Director" img={AndrewJiang} url="https://github.com/aJayz54" />
        <Profile name="Anna Xia" role="Red Developer" img={AnnaXia} url="https://www.linkedin.com/in/anna-xia24/" />
        <Profile name="April Zhang" role="Blue Design" img={AprilZhang} url=""/>
        <Profile name="Athena Ho" role="Blue Developer" img={AthenaHo} url="https://www.linkedin.com/in/athenalho"/>
        <Profile name="Chelsea Cheng" role="Red Designer" img={ChelseaCheng} url="https://chelseacheng.com" />
        <Profile name="Christiana Guan" role="Blue Designer" img={ChristianaGuan} url="https://www.linkedin.com/in/christianag/" />
        <Profile name="Claire Zhang" role="Red Developer" img={ClaireZhang} url="https://czhang020.github.io/claire-site/" />
        <Profile name="Clyve Gassant" role="Blue Developer" img={ClyveGassant} url="https://clyvegassant.github.io/" />
        <Profile name="Dhatri Medarametla" role="Blue Developer" img={DhatriMedarametla} url="https://dmed31.github.io/sparkwebsite/" />
        <Profile name="Emily Kang" role="Blue Developer" img={EmilyKang} url="www.linkedin.com/in/emily-kang-67b55b20a"/>
        <Profile name="Eric Wang" role="Red Developer" img={EricWang} url="https://etnwang.github.io/" />
        <Profile name="Ethan Zhao" role="VP Internal" img={EthanZhao} url="https://ethanxyzhao.com/" />
        <Profile name="Grace Thanglerdsumpan" role="Red Design" img={GraceThang} url="https://www.linkedin.com/in/chanya-thanglerdsumpan/"/>
        <Profile name="Haley Kang" role="Red Developer" img={HaleyKang} url="https://www.linkedin.com/in/hyejinkang02"/>
        <Profile name="Isabelle Gu" role="Blue Design" img={IsabelleGu} url="linkedin.com/in/isabellegu/"/>
        <Profile name="James Baker" role="Blue Developer" img={JamesBaker} url="https://www.linkedin.com/in/james-baker-4694b7206"/>   
        <Profile name="Janice Kim" role="VP External" img={JaniceKim} url="https://www.jankim.me/" />
        <Profile name="Jason Saito" role="Blue Design" img={JasonSaito} url="https://www.linkedin.com/in/jason-saito/" />
        <Profile name="Jasper Zhu" role="Red Design" img={JasperZhu} url="https://www.linkedin.com/in/jasper-zhu-827063193" />
        <Profile name="Jimmy Ren" role="Co-Director" img={JimmyRen} url="https://www.linkedin.com/in/Jim-ren/" />
        <Profile name="Joyce He" role="Red Designer" img={JoyceHe} url="https://www.linkedin.com/in/joyce-he-1059a21b4" />
        <Profile name="Kai Wang" role="Blue Developer" img={KaiWang} url="www.linkedin.com/in/kai-wang-2b6a631b5" />
        <Profile name="Kristine Lam" role="Blue Developer" img={KristineLam} url="https://www.linkedin.com/in/kristine-lam-9660/" />
        <Profile name="Maliha Rahman" role="Blue Design" img={MalihaRahman} url="" />
        <Profile name="Marcel Kida" role="Red Developer &amp; Designer" img={MarcelKida} url="https://marcelkida.com/" />
        <Profile name="Matthew Cho" role="Red Developer" img={MatthewCho} url="https://www.linkedin.com/in/hyun-ki-cho/" />
        <Profile name="Matthew Dong" role="Development Instructor" img={MatthewDong} url="https://matt-dong.github.io" />
        <Profile name="Na Kyung Lee" role="VP Blue" img={NakyungLee} url="https://leeenk.github.io/" />
        <Profile name="Nick Cirillo" role="Blue Developer" img={NickCirillo} url="https://www.linkedin.com/in/nicholas-cirillo-/" />
        <Profile name="Nicole Zhao" role="Blue Developer" img={NicoleZhao} url="https://www.linkedin.com/in/nicole-zhao-a92153210/" />
        <Profile name="Nwai Alfa" role="Blue Design" img={NwaiAlfa} url="https://www.linkedin.com/in/nwai" />
        <Profile name="Paul Loh" role="Red Developer" img={PaulLoh} url="https://lohpaul9.github.io/" />
        <Profile name="Rain Yan" role="Blue Designer" img={RainYan} url="https://github.com/xcupsilon" />
        <Profile name="Razaq Aribidesi" role="Blue Developer" img={RazaqAribidesi} url="https://www.linkedin.com/in/abudurazaqaribidesi/" />
        <Profile name="Sanya Shetty" role="Blue Developer" img={SanyaShetty} url="https://sanyashetty.github.io/" />
        <Profile name="Subin Kim" role="VP Red" img={SubinKim} url="https://www.linkedin.com/in/subin-kim00/" />
        <Profile name="Sumanth Kadiyala" role="Red Developer" img={SumanthKadiyala} url="https://www.linkedin.com/in/sumanthkadiyala/" />
        <Profile name="Sydney Simon" role="Blue Developer" img={SydneySimon} url="https://www.linkedin.com/in/sydney-simon-1468b318b/" />
        <Profile name="Tobias Nguyen" role="Blue Design" img={TobiasNguyen} url="https://www.linkedin.com/mwlite/in/tung-nguyen-95195820b" />
        <Profile name="Yuhan Liu" role="VP Blue" img={YuhanLiu} url="https://yuhanliu-tech.github.io/" />
        <Profile name="Yanjie Zhang" role="Blue Developer" img={YanjieZhang} url="https://yanjiez323.github.io/" />
        <Profile name="Yuni Kim" role="Red Design" img={YuniKim} url="https://www.linkedin.com/in/hyoyun" />
        <Profile name="Zain Khan" role="Blue Developer" img={ZainKhan} url="www.linkedin.com/in/zain-khan-upenncs" />
      </div>
    </Layout>
  );
};

export default IndexPage;
