import * as React from "react";


import Layout from "../components/layout";
import Profile from "../components/profile";
import Navbar from "../components/navbar";


import AndreVen from "../images/sp23-headshots/andre-van-de-ven.jpg"
import AndrewJiang from "../images/sp23-headshots/andrew-jiang.jpg"
import AngieCao from "../images/sp23-headshots/angie-cao.jpeg"
import AniNguyenLe from "../images/sp23-headshots/ani-nguyen-le.jpeg"
import AnnaXia from "../images/sp23-headshots/anna-xia.jpg"
import AprilZhang from "../images/sp23-headshots/april-zhang.jpg"
import August from "../images/sp23-headshots/august.jpg"
import CharlesJin from "../images/sp23-headshots/charles-jin.jpeg"
import ChelseaCheng from "../images/sp23-headshots/chelsea-cheng.jpg"
import CindyWei from "../images/sp23-headshots/cindy-wei.jpg"
import DavidLee from "../images/sp23-headshots/david-lee.jpeg"
import DefneTim from "../images/sp23-headshots/defne-tim.jpg"
import DhatriMedarametla from "../images/sp23-headshots/dhatri-medarametla.jpg"
import EmilyKang from "../images/sp23-headshots/emily-kang.jpeg"
import EricWang from "../images/sp23-headshots/eric-wang.jpg"
import EricLee from "../images/sp23-headshots/eric-lee.png"
import EthanZhao from "../images/sp23-headshots/ethan-zhao.jpg"
import FionaHerzog from "../images/sp23-headshots/fiona-herzog.jpg"
import FionaJiang from "../images/sp23-headshots/fiona-jiang.jpeg"
import GabrielThiessen from "../images/sp23-headshots/gabriel-thiessen.jpeg"
import GraceThang from "../images/sp23-headshots/grace-thanglerdsumpan.jpg"
import HaleyKang from "../images/sp23-headshots/haley-kang.png"
import JamesBaker from "../images/sp23-headshots/james-baker.jpg"
import JaniceKim from "../images/sp23-headshots/janice-kim.jpg"
import JasmineWang from "../images/sp23-headshots/jasmine-wang.png"
import JasonSaito from "../images/sp23-headshots/jason-saito.jpg"
import JasperZhu from "../images/sp23-headshots/jasper-zhu.jpg"
import JohnnyJeong from "../images/sp23-headshots/johnny-jeong.jpg"
import JoyceChen from "../images/sp23-headshots/joyce-chen.jpeg"
import JoyceHe from "../images/sp23-headshots/joyce-he.jpg"
import JoyceYoon from "../images/sp23-headshots/joyce-yoon.jpg"
import JosephDattilo from "../images/sp23-headshots/joseph-dattilo.jpeg"
import Kashyap from "../images/sp23-headshots/kashyap.jpg"
import KatherineYue from "../images/sp23-headshots/katherine-yue.jpeg"
import LukeTong from "../images/sp23-headshots/luke-tong.jpg"
import LunaChen from "../images/sp23-headshots/luna-chen.jpeg"
import LoriBrown from "../images/sp23-headshots/lori-brown.jpeg"
import MarcelKida from "../images/sp23-headshots/marcel-kida.jpg"
import MatthewDong from "../images/sp23-headshots/matthew-dong.jpg"
import MeganYang from "../images/sp23-headshots/megan-yang.jpeg"
import MeilingMathur from "../images/sp23-headshots/meiling-mathur.jpeg"
import MichaelLi from "../images/sp23-headshots/michael-li.jpeg"
import NakyungLee from "../images/sp23-headshots/nakyung-lee.jpg"
import NickCirillo from "../images/sp23-headshots/nick-cirillo.png"
import NondPhokasub from "../images/sp23-headshots/nond-phokasub.jpeg"
import NwaiAlfa from "../images/sp23-headshots/nwai-alfa.jpg"
import NamitaSajai from "../images/sp23-headshots/namita-sajai.jpeg"
import PaulLoh from "../images/sp23-headshots/paul-loh.jpg"
// import RaelynnCui from "../images/sp23-headshots/raelynn-cui.jpg"
import RainYan from "../images/sp23-headshots/rain-yan.jpg"
import RafaelMartinez from "../images/sp23-headshots/raphael-martinez.png"
import RazaqAribidesi from "../images/sp23-headshots/razaq-aribidesi.jpg"
import RyanDeLopez from "../images/sp23-headshots/ryan-de-lopez.jpg"
import Sey from "../images/sp23-headshots/sey.jpg"
import SumanthKadiyala from "../images/sp23-headshots/sumanth-kadiyala.jpg"
import SanyaShetty from "../images/sp23-headshots/sanya-shetty.jpg"


import SydneySimon from "../images/sp23-headshots/sydney-simon.jpg"
import TobiasNguyen from "../images/sp23-headshots/tobias-nguyen.jpg"
import XueJiang from "../images/sp23-headshots/xue-jiang.jpg"
import YuhanLiu from "../images/sp23-headshots/yuhan-liu.jpg"
import YueZhao from "../images/sp23-headshots/yue-zhao.jpeg"




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
        <h2>Spring 2024</h2>
      </div>

      <div id="profiles-section">
        <Profile name="Haley Kang" role="Co-director" img={HaleyKang} url="https://www.linkedin.com/in/hyejinkang02" />
        <Profile name="Paul Loh" role="Co-Director" img={PaulLoh} url="https://lohpaul9.github.io/" />
        <Profile name="Andre van de Ven" role="Internal VP" img={AndreVen} url="https://www.andrevandeven.us/" />
        <Profile name="Grace Thanglerdsumpan" role="External VP" img={GraceThang} url="https://www.linkedin.com/in/chanya-thanglerdsumpan/" />
        <Profile name="Jasper Zhu" role="Red VP" img={JasperZhu} url="https://www.linkedin.com/in/jasper-zhu-827063193" />
        <Profile name="Nick Cirillo" role="Blue VP" img={NickCirillo} url="https://www.linkedin.com/in/nicholas-cirillo-/" />
        <Profile name="Joyce Chen" role="Marketing Chair" img={JoyceChen} url="https://joycezchen.myportfolio.com/work" />
        <Profile name="Luna Chen" role="Social Chair" img={LunaChen} url="https://www.linkedin.com/in/luna-chen-9246501b0/" />

        <Profile name="Jasmine Wang" role="Red Project Lead" img={JasmineWang} url="https://jasminewangux.com/" />
        <Profile name="James Baker" role="Red Project Lead" img={JamesBaker} url="https://www.linkedin.com/in/james-baker-4694b7206" />
        <Profile name="Eric Lee" role="Project Lead" img={EricLee} url="https://www.ericslee.dev" />
        <Profile name="Luke Tong" role="Red Project Lead" img={LukeTong} url="https://www.linkedin.com/in/luke-rt/" />
        <Profile name="Yue Zhao" role="Red Designer" img={YueZhao} url="https://www.linkedin.com/in/yue-zhao-janie/" />
        <Profile name="Ani Nguyen Le" role="Red Designer" img={AniNguyenLe} url="https://www.linkedin.com/in/ani-nguyen-le-0788a1220" />
        <Profile name="Namita Sajai" role="Red Designer" img={NamitaSajai} url="https://namitasajai.github.io/finalportfolio/index.html" />
        <Profile name="Fiona Jiang" role="Red Developer" img={FionaJiang} url="http://linkedin.com/in/fiona-jiang-62b6a31b2" />
        <Profile name="Joseph Dattilo" role="Red Developer" img={JosephDattilo} url="https://www.linkedin.com/in/joe-dattilo/" />
        <Profile name="Charles Jin" role="Red Developer" img={CharlesJin} url="https://www.linkedin.com/in/chenxi-charles-jin" />
        <Profile name="Megan Yang" role="Red Developer" img={MeganYang} url="megyang@seas.upenn.edu" />
        <Profile name="Meiling Mathur" role="Red Developer" img={MeilingMathur} url="https://www.linkedin.com/in/meilingmathur/" />
        <Profile name="Michael Li" role="Red Developer" img={MichaelLi} url="https://github.com/Michaell14" />
        <Profile name="August Fu" role="Red Developer" img={August} url="https://www.linkedin.com/in/august-fu" />
        <Profile name="Emily Kang" role="Red Developer" img={EmilyKang} url="https://www.linkedin.com/in/emily-kang-67b55b20a" />
        <Profile name="Angie Cao" role="Red Developer" img={AngieCao} url="https://www.linkedin.com/in/angelina-cao-78a0551a5" />
        <Profile name="Johhny Jeong" role="Red Developer" img={JohnnyJeong} url="https://www.linkedin.com/in/jaeheon-jeong-ab0761223" />
        <Profile name="Cindy Wei" role="Red Developer" img={CindyWei} url="https://www.linkedin.com/in/cindy-wei-7ba778227/" />
        <Profile name="Lori Brown" role="Red Developer" img={LoriBrown} url="https://www.linkedin.com/in/lori-brown-17a653248/" />
        <Profile name="Sumanth Kadiyala" role="Rev Developer" img={SumanthKadiyala} url="https://www.linkedin.com/in/sumanthkadiyala/" />

        <Profile name="Barbara Seyram Nhyira Agbotey" role="Blue Mentor" img={Sey} url="https://seynhyi.github.io" />
        <Profile name="Chelsea Cheng" role="Blue Mentor" img={ChelseaCheng} url="https://chelseacheng.com" />
        <Profile name="Fiona Herzog" role="Blue Designer" img={FionaHerzog} url="" />
        <Profile name="Nond Phokasub" role="Blue Designer" img={NondPhokasub} url="https://bynond.com/" />
        <Profile name="Gabriel Thiessen" role="Blue Developer" img={GabrielThiessen} url="https://github.com/bingberpbuck" />
        <Profile name="Katherine Yue" role="Blue Developer" img={KatherineYue} url="https://www.linkedin.com/in/katherine-yue/" />
        <Profile name="Rafael Martinez" role="Blue Developer" img={RafaelMartinez} url="" />
        <Profile name="Xue Jiang" role="Blue Developer" img={XueJiang} url="https://xue-portfolio.vercel.app/" />
        <Profile name="David Lee" role="Blue Developer" img={DavidLee} url="" />
        <Profile name="Raphael Martinez" role="Blue Developer" img={RafaelMartinez} url="" />

        <Profile name="Anna Xia" role="Social Member" img={AnnaXia} url="https://www.linkedin.com/in/anna-xia24/" />
        <Profile name="Andrew Jiang" role="Social Member" img={AndrewJiang} url="https://github.com/aJayz54" />
        <Profile name="April Zhang" role="Social Member" img={AprilZhang} url="" />
        <Profile name="Defne Tim" role="Social Member" img={DefneTim} url="https://www.llinkedin.com/in/defne-tim-b61b7126b" />
        <Profile name="Dhatri Medarametla" role="Social Member" img={DhatriMedarametla} url="https://dmed31.github.io/sparkwebsite/" />
        <Profile name="Eric Wang" role="Social Member" img={EricWang} url="https://etnwang.github.io/" />
        <Profile name="Ethan Zhao" role="Social Member" img={EthanZhao} url="https://ethanxyzhao.com/" />
        <Profile name="Janice Kim" role="Social Member" img={JaniceKim} url="https://www.jankim.me/" />
        <Profile name="Jason Saito" role="Social Member" img={JasonSaito} url="https://www.linkedin.com/in/jason-saito/" />
        <Profile name="Marcel Kida" role="Social Member" img={MarcelKida} url="https://marcelkida.com/" />
        <Profile name="Matthew Dong" role="Social Member" img={MatthewDong} url="https://matt-dong.github.io" />
        <Profile name="Na Kyung Lee" role="Social Member" img={NakyungLee} url="https://leeenk.github.io/" />
        <Profile name="Nwai Alfa" role="Social Member" img={NwaiAlfa} url="https://www.linkedin.com/in/nwai" />
        <Profile name="Rain Yan" role="Social Member" img={RainYan} url="https://github.com/xcupsilon" />
        <Profile name="Razaq Aribidesi" role="Social Member" img={RazaqAribidesi} url="https://www.linkedin.com/in/abudurazaqaribidesi/" />
        <Profile name="Ryan De Lopez" role="Social Member" img={RyanDeLopez} url="https://www.linkedin.com/in/vrdelopez/" />
        <Profile name="Sanya Shetty" role="Social Member" img={SanyaShetty} url="https://sanyashetty.github.io/" />
        <Profile name="Sydney Simon" role="Social Member" img={SydneySimon} url="https://www.linkedin.com/in/sydney-simon-1468b318b/" />
        <Profile name="Tobias Nguyen" role="Social Member" img={TobiasNguyen} url="https://www.linkedin.com/mwlite/in/tung-nguyen-95195820b" />
        <Profile name="Yuhan Liu" role="Social Member" img={YuhanLiu} url="https://yuhanliu-tech.github.io/" />
        <Profile name="Joyce He" role="Social Member" img={JoyceHe} url="https://www.linkedin.com/in/joyce-he-1059a21b4" />
        <Profile name="Joyce Yoon" role="Social Member" img={JoyceYoon} url="https://www.linkedin.com/in/joyce-yoon-penn/" />
        <Profile name="Kashyap Chaturvedula" role="Social Member" img={Kashyap} url="https://www.linkedin.com/in/kashyap-chaturvedula-596682162/" />
      </div>
    </Layout>
  );
};

export default IndexPage;
