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
import EmmiWu from "../images/sp23-headshots/emmi-wu.jpg"
import EricWang from "../images/sp23-headshots/eric-wang.jpg"
import EricLee from "../images/sp23-headshots/eric-lee.png"
import EricZou from "../images/sp23-headshots/eric-zou.jpg"
import EstelleKim from "../images/sp23-headshots/estelle-kim.jpg"
import EthanZhao from "../images/sp23-headshots/ethan-zhao.jpg"
import FionaHerzog from "../images/sp23-headshots/fiona-herzog.jpg"
import FionaJiang from "../images/sp23-headshots/fiona-jiang.jpeg"
import GabrielThiessen from "../images/sp23-headshots/gabriel-thiessen.jpeg"
import GiaGupta from "../images/sp23-headshots/gia-gupta.png"
import GraceThang from "../images/sp23-headshots/grace-thanglerdsumpan.jpg"
import HaleyKang from "../images/sp23-headshots/haley-kang.png"
import JamesBaker from "../images/sp23-headshots/james-baker.jpg"
import JaniceKim from "../images/sp23-headshots/janice-kim.jpg"
import JasmineWang from "../images/sp23-headshots/jasmine-wang.png"
import JasonSaito from "../images/sp23-headshots/jason-saito.jpg"
import JasperZhu from "../images/sp23-headshots/jasper-zhu.jpg"
import JaymeChen from "../images/sp23-headshots/jayme-chen.jpg"
import JohnnyJeong from "../images/sp23-headshots/johnny-jeong.jpg"
import JoyceChen from "../images/sp23-headshots/joyce-chen.jpeg"
import JoyceHe from "../images/sp23-headshots/joyce-he.jpg"
import JoyceYoon from "../images/sp23-headshots/joyce-yoon.jpg"
import JosephDattilo from "../images/sp23-headshots/joseph-dattilo.jpeg"
import Kashyap from "../images/sp23-headshots/kashyap.jpg"
import KatherineYue from "../images/sp23-headshots/katherine-yue.jpeg"
import KevinWei from "../images/sp23-headshots/kevin-wei.jpg"
import LucaPicazo from "../images/sp23-headshots/luca-picazo.jpg"
import LukaKoll from "../images/sp23-headshots/luka-koll.jpg"
import LukeTong from "../images/sp23-headshots/luke-tong.jpg"
import LunaChen from "../images/sp23-headshots/luna-chen.jpeg"
import LoriBrown from "../images/sp23-headshots/lori-brown.jpeg"
import MarcelKida from "../images/sp23-headshots/marcel-kida.jpg"
import MaryLiu from "../images/sp23-headshots/mary-liu.jpg"
import MatthewDong from "../images/sp23-headshots/matthew-dong.jpg"
import MeganYang from "../images/sp23-headshots/megan-yang.jpeg"
import MeilingMathur from "../images/sp23-headshots/meiling-mathur.jpeg"
import MelodyZhang from "../images/sp23-headshots/melody-zhang.jpg"
import MichaelLi from "../images/sp23-headshots/michael-li.jpeg"
import NakyungLee from "../images/sp23-headshots/nakyung-lee.jpg"
import NickCirillo from "../images/sp23-headshots/nick-cirillo.png"
import NondPhokasub from "../images/sp23-headshots/nond-phokasub.jpg"
import NwaiAlfa from "../images/sp23-headshots/nwai-alfa.jpg"
import NamitaSajai from "../images/sp23-headshots/namita-sajai.jpeg"
import NishatOlayiwola from "../images/sp23-headshots/nishat-olayiwola.jpg"
import OliviaHu from "../images/sp23-headshots/olivia-hu.jpg"
import PaulLoh from "../images/sp23-headshots/paul-loh.jpg"
import RaelynnCui from "../images/sp23-headshots/raelynn-cui.jpg"
import RainYan from "../images/sp23-headshots/rain-yan.jpg"
import RaphaelMartinez from "../images/sp23-headshots/raphael-martinez.png"
import RazaqAribidesi from "../images/sp23-headshots/razaq-aribidesi.jpg"
import RuthZhao from "../images/sp23-headshots/ruth-zhao.png"
import RyanDeLopez from "../images/sp23-headshots/ryan-de-lopez.jpg"
import SamPark from "../images/sp23-headshots/sam-park.jpg"
import Sey from "../images/sp23-headshots/sey.jpg"
import SumanthKadiyala from "../images/sp23-headshots/sumanth-kadiyala.jpg"
import SanyaShetty from "../images/sp23-headshots/sanya-shetty.jpg"
import SethSukboontip from "../images/sp23-headshots/seth-sukboontip.jpg"
import ShauryaSarma from "../images/sp23-headshots/shaurya-sarma.jpg"
import SydneySimon from "../images/sp23-headshots/sydney-simon.jpg"
import TermTaepaisitphongse from "../images/sp23-headshots/term-taepaisitphongse.jpg" 
import TobiasNguyen from "../images/sp23-headshots/tobias-nguyen.jpg"
import WesleyLiu from "../images/sp23-headshots/wesley-liu.jpg"
import XueJiang from "../images/sp23-headshots/xue-jiang.jpg"
import YuhanLiu from "../images/sp23-headshots/yuhan-liu.jpg"
import YueZhao from "../images/sp23-headshots/yue-zhao.jpeg"
import ZaraBaig from "../images/sp23-headshots/zara-baig.jpg"




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
        <h2>Fall 2024</h2>
      </div>

      <div id="profiles-section">
        <Profile name="Nick Cirillo" role="Co-President" img={NickCirillo} url="https://www.linkedin.com/in/nicholas-cirillo-/" />
        <Profile name="Andre van de Ven" role="Co-President" img={AndreVen} url="https://www.andrevandeven.us/" />
        <Profile name="Meiling Mathur" role="VP External" img={MeilingMathur} url="https://www.linkedin.com/in/meilingmathur/" />
        <Profile name="Megan Yang" role="VP Internal" img={MeganYang} url="megyang@seas.upenn.edu" />
        <Profile name="Jasmine Wang" role="VP Red" img={JasmineWang} url="https://jasminewangux.com/" />
        <Profile name="Raphael Martinez" role="VP Blue" img={RaphaelMartinez} url="" />
        <Profile name="Namita Sajai" role="Marketing Chair" img={NamitaSajai} url="https://namitasajai.github.io/finalportfolio/index.html" />
        <Profile name="Luke Tong" role="Social Chair" img={LukeTong} url="https://www.linkedin.com/in/luke-rt/" />

        {/* PLs here*/}

        <Profile name="Lori Brown" role="Red Designer" img={LoriBrown} url="https://www.linkedin.com/in/lori-brown-17a653248/" />
        <Profile name="Joyce Chen" role="Red Designer/Developer" img={JoyceChen} url="https://joycezchen.myportfolio.com/work" />
        <Profile name="Raelynn Cui" role="Red Designer" img={RaelynnCui} url="" />
        <Profile name="Fiona Herzog" role="Red Designer" img={FionaHerzog} url="" />
        <Profile name="Mary Liu" role="Red Designer" img={MaryLiu} url="" />
        <Profile name="Ani Nguyen Le" role="Red Designer" img={AniNguyenLe} url="https://www.linkedin.com/in/ani-nguyen-le-0788a1220" />
        <Profile name="Nond Phokasub" role="Red Designer" img={NondPhokasub} url="https://bynond.com/" />
        <Profile name="Jason Saito" role="Red Designer" img={JasonSaito} url="https://www.linkedin.com/in/jason-saito/" />
        <Profile name="Yue Zhao" role="Red Designer" img={YueZhao} url="https://www.linkedin.com/in/yue-zhao-janie/" />

        <Profile name="Angie Cao" role="Red Developer" img={AngieCao} url="https://www.linkedin.com/in/angelina-cao-78a0551a5" />
        <Profile name="Kashyap Chaturvedula" role="Red Developer" img={Kashyap} url="https://www.linkedin.com/in/kashyap-chaturvedula-596682162/" />
        <Profile name="Luna Chen" role="Red Developer" img={LunaChen} url="https://www.linkedin.com/in/luna-chen-9246501b0/" />
        <Profile name="Fiona Jiang" role="Red Developer" img={FionaJiang} url="http://linkedin.com/in/fiona-jiang-62b6a31b2" />
        <Profile name="David Lee" role="Red Developer" img={DavidLee} url="" />
        <Profile name="Eric Lee" role="Red Developer" img={EricLee} url="https://www.ericslee.dev" />
        <Profile name="Michael Li" role="Red Developer" img={MichaelLi} url="https://github.com/Michaell14" />
        <Profile name="Sanya Shetty" role="Red Developer" img={SanyaShetty} url="https://sanyashetty.github.io/" />
        <Profile name="Gabriel Thiessen" role="Red Developer" img={GabrielThiessen} url="https://github.com/bingberpbuck" />
        <Profile name="Cindy Wei" role="Red Developer" img={CindyWei} url="https://www.linkedin.com/in/cindy-wei-7ba778227/" />
        <Profile name="Katherine Yue" role="Red Developer" img={KatherineYue} url="https://www.linkedin.com/in/katherine-yue/" />



        {/* <Profile name="Max de Castro" role="Red Designer" img={MaxdeCastro} url="" /> */}
        {/* <Profile name="Sarah Chan" role="Red Designer" img={SarahChan} url="" /> */}
        <Profile name="Emmi Wu" role="Red Designer" img={EmmiWu} url="" />
        <Profile name="Ruth Zhao" role="Red Designer" img={RuthZhao} url="https://www.linkedin.com/in/ruth-zhao-450446251/" />

        <Profile name="Estelle Kim" role="Red Developer" img={EstelleKim} url="https://www.linkedin.com/in/estelle-kim-41b1b7218/" />
        <Profile name="Luka Koll" role="Red Developer" img={LukaKoll} url="https://www.linkedin.com/in/luka-koll-704715274/" />
        <Profile name="Shaurya Sarma" role="Red Developer" img={ShauryaSarma} url="https://www.linkedin.com/in/shaurya-sarma/" />
        <Profile name="Term Taepaisitphongse" role="Red Developer" img={TermTaepaisitphongse} url="" />
        <Profile name="Eric Zou" role="Red Developer" img={EricZou} url="https://ezou626.github.io" />




        {/* Blue here */}
        <Profile name="Zara Baig" role="Blue Designer" img={ZaraBaig} url="" />
        <Profile name="Nishat Olayiwola" role="Blue Designer" img={NishatOlayiwola} url="https://nishatolay.netlify.app/" />
        <Profile name="Luca Picazo" role="Blue Designer" img={LucaPicazo} url="https://lkplorenzo.wixsite.com/breakeven" />
        <Profile name="Kevin Wei" role="Blue Designer" img={KevinWei} url="https://kevinwei.itch.io/" />
        <Profile name="Melody Zhang" role="Blue Designer" img={MelodyZhang} url="https://drive.google.com/drive/folders/15JxR0x9xpSuJKatoIyEU47xBR_9-ez3d" />
        
        <Profile name="Jayme Chen" role="Blue Developer" img={JaymeChen} url="" />
        <Profile name="Gia Gupta" role="Blue Developer" img={GiaGupta} url="" />
        <Profile name="Olivia Hu" role="Blue Developer" img={OliviaHu} url="https://github.com/olivianhu" />
        {/* <Profile name="Brianna Kwan" role="Blue Developer" img={BriannaKwan} url="" /> */}
        <Profile name="Wesley Liu" role="Blue Developer" img={WesleyLiu} url="https://www.linkedin.com/in/wesley-liu-067518212/" />
        <Profile name="Seohyun (Sam) Park" role="Blue Developer" img={SamPark} url="" />
        <Profile name="Seth Sukboontip" role="Blue Developer" img={SethSukboontip} url="https://www.linkedin.com/in/seth-sukboontip/" />






        <Profile name="Seyram Agbotey" role="Mentor" img={Sey} url="https://seynhyi.github.io" />
        <Profile name="James Baker" role="Mentor" img={JamesBaker} url="https://www.linkedin.com/in/james-baker-4694b7206" />
        <Profile name="Yuhan Liu" role="Mentor" img={YuhanLiu} url="https://yuhanliu-tech.github.io/" />
        <Profile name="Paul Loh" role="Mentor" img={PaulLoh} url="https://lohpaul9.github.io/" />
        <Profile name="Grace Thanglerdsumpan" role="Mentor" img={GraceThang} url="https://www.linkedin.com/in/chanya-thanglerdsumpan/" />
        <Profile name="Eric Wang" role="Mentor" img={EricWang} url="https://etnwang.github.io/" />
        <Profile name="April Zhang" role="Mentor" img={AprilZhang} url="" />

        <Profile name="Joseph Dattilo" role="Social Member" img={JosephDattilo} url="https://www.linkedin.com/in/joe-dattilo/" />
        <Profile name="Ryan De Lopez" role="Social Member" img={RyanDeLopez} url="https://www.linkedin.com/in/vrdelopez/" />
        <Profile name="August Fu" role="Social Member" img={August} url="https://www.linkedin.com/in/august-fu" />
        <Profile name="Johnny Jeong" role="Social Member" img={JohnnyJeong} url="https://www.linkedin.com/in/jaeheon-jeong-ab0761223" />
        <Profile name="Xue Jiang" role="Social Member" img={XueJiang} url="https://xue-portfolio.vercel.app/" />
        <Profile name="Charles Jin" role="Social Member" img={CharlesJin} url="https://www.linkedin.com/in/chenxi-charles-jin" />
        <Profile name="Sumanth Kadiyala" role="Social Member" img={SumanthKadiyala} url="https://www.linkedin.com/in/sumanthkadiyala/" />
        <Profile name="Emily Kang" role="Social Member" img={EmilyKang} url="https://www.linkedin.com/in/emily-kang-67b55b20a" />
        <Profile name="Marcel Kida" role="Social Member" img={MarcelKida} url="https://marcelkida.com/" />
        <Profile name="Na Lee" role="Social Member" img={NakyungLee} url="https://leeenk.github.io/" />
        <Profile name="Tobias Nguyen" role="Social Member" img={TobiasNguyen} url="https://www.linkedin.com/mwlite/in/tung-nguyen-95195820b" />
        <Profile name="Ethan Zhao" role="Social Member" img={EthanZhao} url="https://ethanxyzhao.com/" />
        <Profile name="Jasper Zhu" role="Social Member" img={JasperZhu} url="https://www.linkedin.com/in/jasper-zhu-827063193" />
      
        
        {/* 
        
        
        <Profile name="Dhatri Medarametla" role="Social Member" img={DhatriMedarametla} url="https://dmed31.github.io/sparkwebsite/" />
        <Profile name="Nwai Alfa" role="Social Member" img={NwaiAlfa} url="https://www.linkedin.com/in/nwai" />
        <Profile name="Rain Yan" role="Social Member" img={RainYan} url="https://github.com/xcupsilon" />
        <Profile name="Sydney Simon" role="Social Member" img={SydneySimon} url="https://www.linkedin.com/in/sydney-simon-1468b318b/" />
        <Profile name="Joyce Yoon" role="Social Member" img={JoyceYoon} url="https://www.linkedin.com/in/joyce-yoon-penn/" /> */}


      </div>
    </Layout>
  );
};

export default IndexPage;
