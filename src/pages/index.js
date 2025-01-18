import * as React from "react";


import Layout from "../components/layout";
import Profile from "../components/profile";
import Navbar from "../components/navbar";


import AndreVen from "../images/headshots/Andre-van-de-ven.jpg"
import AndreiPiterbarg from "../images/headshots/andrei-piterbarg.jpg"
import AndrewJiang from "../images/headshots/andrew-jiang.jpg"
import AngieCao from "../images/headshots/angie-cao.jpeg"
import AniNguyenLe from "../images/headshots/ani-nguyen-le.jpeg"
import AnnaXia from "../images/headshots/anna-xia.jpg"
import AprilZhang from "../images/headshots/april-zhang.jpg"
import August from "../images/headshots/august.jpg"
import BriannaKwan from "../images/headshots/brianna-kwan.jpg"
import CharlesJin from "../images/headshots/charles-jin.jpeg"
import ChelseaCheng from "../images/headshots/chelsea-cheng.jpg"
import CindyWei from "../images/headshots/cindy-wei.jpg"
import DavidLee from "../images/headshots/david-lee.jpeg"
import DefneTim from "../images/headshots/defne-tim.jpg"
import DhatriMedarametla from "../images/headshots/dhatri-medarametla.jpg"
import EmilyKang from "../images/headshots/emily-kang.jpeg"
import EmmiWu from "../images/headshots/emmi-wu.jpg"
import EricWang from "../images/headshots/eric-wang.jpg"
import EricLee from "../images/headshots/eric-lee.png"
import EricZou from "../images/headshots/eric-zou.jpg"
import EstelleKim from "../images/headshots/estelle-kim.jpeg"
import EthanZhao from "../images/headshots/ethan-zhao.jpg"
import FionaHerzog from "../images/headshots/fiona-herzog.jpg"
import FionaJiang from "../images/headshots/fiona-jiang.jpeg"
import GabrielThiessen from "../images/headshots/gabriel-thiessen.jpeg"
import GiaGupta from "../images/headshots/gia-gupta.png"
import GraceThang from "../images/headshots/grace-thanglerdsumpan.jpg"
import HaleyKang from "../images/headshots/haley-kang.png"
import JamesBaker from "../images/headshots/james-baker.jpg"
import JaniceKim from "../images/headshots/janice-kim.jpg"
import JasmineWang from "../images/headshots/jasmine-wang.png"
import JasonSaito from "../images/headshots/jason-saito.jpg"
import JasperZhu from "../images/headshots/jasper-zhu.jpg"
import JaymeChen from "../images/headshots/jayme-chen.jpeg"
import JohnnyJeong from "../images/headshots/johnny-jeong.jpg"
import JoyceChen from "../images/headshots/joyce-chen.jpeg"
import JoyceHe from "../images/headshots/joyce-he.jpg"
import JoyceYoon from "../images/headshots/joyce-yoon.jpg"
import JosephDattilo from "../images/headshots/joseph-dattilo.jpeg"
import Kashyap from "../images/headshots/kashyap.jpg"
import KatherineYue from "../images/headshots/katherine-yue.jpeg"
import KeiTaketsuna from "../images/headshots/kei-taketsuna.jpg"
import KevinWei from "../images/headshots/kevin-wei.jpeg"
import LucaPicazo from "../images/headshots/luca-picazo.jpeg"
import LukaKoll from "../images/headshots/luka-koll.jpg"
import LukeTong from "../images/headshots/luke-tong.png"
import LunaChen from "../images/headshots/luna-chen.jpeg"
import LoriBrown from "../images/headshots/lori-brown.jpeg"
import MarcelKida from "../images/headshots/marcel-kida.jpg"
import MaryLiu from "../images/headshots/mary-liu.jpg"
import MatthewDong from "../images/headshots/matthew-dong.jpg"
import MaxdeCastro from "../images/headshots/max-de-castro.jpg"
import MeganYang from "../images/headshots/megan-yang.jpeg"
import MeilingMathur from "../images/headshots/meiling-mathur.png"
import MelodyZhang from "../images/headshots/melody-zhang.jpeg"
import MichaelLi from "../images/headshots/michael-li.jpeg"
import NakyungLee from "../images/headshots/nakyung-lee.jpg"
import NickCirillo from "../images/headshots/nick-cirillo.png"
import NondPhokasub from "../images/headshots/nond-phokasub.jpg"
import NwaiAlfa from "../images/headshots/nwai-alfa.jpg"
import NamitaSajai from "../images/headshots/namita-sajai.jpeg"
import NishatOlayiwola from "../images/headshots/nishat-olayiwola.jpg"
import OliviaHu from "../images/headshots/olivia-hu.jpg"
import PaulLoh from "../images/headshots/paul-loh.jpg"
import RaelynnCui from "../images/headshots/raelynn-cui.jpg"
import RainYan from "../images/headshots/rain-yan.jpg"
import RaphaelMartinez from "../images/headshots/raphael-martinez.png"
import RazaqAribidesi from "../images/headshots/razaq-aribidesi.jpg"
import RuthZhao from "../images/headshots/ruth-zhao.png"
import RyanDeLopez from "../images/headshots/ryan-de-lopez.jpg"
import SamPark from "../images/headshots/sam-park.png"
import Sey from "../images/headshots/sey.jpg"
import SumanthKadiyala from "../images/headshots/sumanth-kadiyala.jpg"
import SurabhiSharma from "../images/headshots/surabhi-sharma.jpg"
import SanyaShetty from "../images/headshots/sanya-shetty.jpg"
import SarahChan from "../images/headshots/sarah-chan.png"
import SethSukboontip from "../images/headshots/seth-sukboontip.jpg"
import ShauryaSarma from "../images/headshots/shaurya-sarma.jpg"
import SydneySimon from "../images/headshots/sydney-simon.jpg"
import TermTaepaisitphongse from "../images/headshots/term-taepaisitphongse.jpg" 
import TobiasNguyen from "../images/headshots/tobias-nguyen.jpg"
import WesleyLiu from "../images/headshots/wesley-liu.jpg"
import XueJiang from "../images/headshots/xue-jiang.jpg"
import YuhanLiu from "../images/headshots/yuhan-liu.jpg"
import YueZhao from "../images/headshots/yue-zhao.jpeg"
import ZaraBaig from "../images/headshots/zara-baig.jpeg"




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
        {/* Board */}
        <Profile name="Nick Cirillo" role="Co-President" img={NickCirillo} url="https://www.linkedin.com/in/nicholas-cirillo-/" />
        <Profile name="André van de Ven" role="Co-President" img={AndreVen} url="https://www.andrevandeven.us/" />
        <Profile name="Meiling Mathur" role="VP External & Project Lead" img={MeilingMathur} url="https://www.linkedin.com/in/meilingmathur/" />
        <Profile name="Megan Yang" role="VP Internal" img={MeganYang} url="megyang@seas.upenn.edu" />
        <Profile name="Jasmine Wang" role="VP Red" img={JasmineWang} url="https://jasminewangux.com/" />
        <Profile name="Raphael Martinez" role="VP Blue" img={RaphaelMartinez} url="" />
        <Profile name="Namita Sajai" role="Marketing Chair" img={NamitaSajai} url="https://namitasajai.github.io/finalportfolio/index.html" />
        <Profile name="Luke Tong" role="Social Chair" img={LukeTong} url="https://www.linkedin.com/in/luke-rt/" />

        {/* PLs */}
        <Profile name="Joyce Chen" role="Project Lead"/*role="Red Designer/Developer"*/ img={JoyceChen} url="https://joycezchen.myportfolio.com/work" />
        <Profile name="Fiona Jiang" role="Project Lead"/*role="Red Developer"*/ img={FionaJiang} url="http://linkedin.com/in/fiona-jiang-62b6a31b2" />
        <Profile name="Estelle Kim" role="Project Lead"/*role="Red Developer"*/ img={EstelleKim} url="https://www.linkedin.com/in/estelle-kim-41b1b7218/" />
        <Profile name="Michael Li" role="Project Lead"/*role="Red Developer"*/ img={MichaelLi} url="https://github.com/Michaell14" />
        <Profile name="Shaurya Sarma" role="Project Lead"/*role="Red Developer"*/ img={ShauryaSarma} url="https://www.linkedin.com/in/shaurya-sarma/" />
        <Profile name="Eric Zou" role="Project Lead"/*role="Red Developer"*/ img={EricZou} url="https://ezou626.github.io" />

        {/* Red Design */}
        <Profile name="Sarah Chan" role="Red Designer" img={SarahChan} url="" />
        <Profile name="Raelynn Cui" role="Red Designer" img={RaelynnCui} url="" />
        <Profile name="Max de Castro" role="Red Designer" img={MaxdeCastro} url="" />
        <Profile name="Fiona Herzog" role="Red Designer" img={FionaHerzog} url="" />
        <Profile name="Mary Liu" role="Red Designer" img={MaryLiu} url="" />
        <Profile name="Ani Nguyen Le" role="Red Designer" img={AniNguyenLe} url="https://www.linkedin.com/in/ani-nguyen-le-0788a1220" />
        <Profile name="Nond Phokasub" role="Red Designer" img={NondPhokasub} url="https://bynond.com/" />
        <Profile name="Emmi Wu" role="Red Designer" img={EmmiWu} url="" />
        <Profile name="Ruth Zhao" role="Red Designer" img={RuthZhao} url="https://www.linkedin.com/in/ruth-zhao-450446251/" />
        <Profile name="Yue Zhao" role="Red Designer" img={YueZhao} url="https://www.linkedin.com/in/yue-zhao-janie/" />

        {/* Red Dev */}
        <Profile name="Lori Brown" role="Red Developer" img={LoriBrown} url="https://www.linkedin.com/in/lori-brown-17a653248/" />
        <Profile name="Angie Cao" role="Red Developer" img={AngieCao} url="https://www.linkedin.com/in/angelina-cao-78a0551a5" />
        <Profile name="Luna Chen" role="Red Developer" img={LunaChen} url="https://www.linkedin.com/in/luna-chen-9246501b0/" />
        <Profile name="Luka Koll" role="Red Developer" img={LukaKoll} url="https://www.linkedin.com/in/luka-koll-704715274/" />
        <Profile name="David Lee" role="Red Developer" img={DavidLee} url="" />
        <Profile name="Eric Lee" role="Red Developer" img={EricLee} url="https://www.ericslee.dev" />  
        <Profile name="Andrei Piterbarg" role="Red Developer" img={AndreiPiterbarg} url="https://apiterbarg.com" />
        <Profile name="Term Taepaisitphongse" role="Red Developer" img={TermTaepaisitphongse} url="" />
        <Profile name="Gabriel Thiessen" role="Red Developer" img={GabrielThiessen} url="https://github.com/bingberpbuck" />
        <Profile name="Cindy Wei" role="Red Developer" img={CindyWei} url="https://www.linkedin.com/in/cindy-wei-7ba778227/" />
        <Profile name="Katherine Yue" role="Red Developer" img={KatherineYue} url="https://www.linkedin.com/in/katherine-yue/" />
        
        {/* Blue Design */}
        <Profile name="Zara Baig" role="Blue Designer" img={ZaraBaig} url="" />
        <Profile name="Nishat Olayiwola" role="Blue Designer" img={NishatOlayiwola} url="https://nishatolay.netlify.app/" />
        <Profile name="Luca Picazo" role="Blue Designer" img={LucaPicazo} url="https://lkplorenzo.wixsite.com/breakeven" />
        <Profile name="Surabhi Sharma" role="Blue Designer" img={SurabhiSharma} url="" />
        <Profile name="Kevin Wei" role="Blue Designer" img={KevinWei} url="https://kevinwei.itch.io/" />
        <Profile name="Melody Zhang" role="Blue Designer" img={MelodyZhang} url="https://drive.google.com/drive/folders/15JxR0x9xpSuJKatoIyEU47xBR_9-ez3d" />

        {/* Blue Dev */}
        <Profile name="Jayme Chen" role="Blue Developer" img={JaymeChen} url="" />
        <Profile name="Gia Gupta" role="Blue Developer" img={GiaGupta} url="" />
        <Profile name="Olivia Hu" role="Blue Developer" img={OliviaHu} url="https://github.com/olivianhu" />
        <Profile name="Brianna Kwan" role="Blue Developer" img={BriannaKwan} url="https://www.linkedin.com/in/brianna-kwan-929413228" />
        <Profile name="Wesley Liu" role="Blue Developer" img={WesleyLiu} url="https://www.linkedin.com/in/wesley-liu-067518212/" />
        <Profile name="Seohyun (Sam) Park" role="Blue Developer" img={SamPark} url="" />
        <Profile name="Seth Sukboontip" role="Blue Developer" img={SethSukboontip} url="https://www.linkedin.com/in/seth-sukboontip/" />
        <Profile name="Kei Taketsuna" role="Blue Developer" img={KeiTaketsuna} url="https://www.linkedin.com/in/keitsuna/" />

        {/* Mentors */}
        <Profile name="Seyram Agbotey" role="Mentor" img={Sey} url="https://seynhyi.github.io" />
        <Profile name="James Baker" role="Mentor" img={JamesBaker} url="https://www.linkedin.com/in/james-baker-4694b7206" />
        <Profile name="Yuhan Liu" role="Mentor" img={YuhanLiu} url="https://yuhanliu-tech.github.io/" />
        <Profile name="Paul Loh" role="Mentor" img={PaulLoh} url="https://lohpaul9.github.io/" />
        <Profile name="Grace Thanglerdsumpan" role="Mentor" img={GraceThang} url="https://www.linkedin.com/in/chanya-thanglerdsumpan/" />
        <Profile name="Eric Wang" role="Mentor" img={EricWang} url="https://etnwang.github.io/" />
        <Profile name="April Zhang" role="Mentor" img={AprilZhang} url="" />

        {/* Social Members */}
        <Profile name="Kashyap Chaturvedula" role="Social Member" img={Kashyap} url="https://www.linkedin.com/in/kashyap-chaturvedula-596682162/" />
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
        <Profile name="Sanya Shetty" role="Social Member" img={SanyaShetty} url="https://sanyashetty.github.io/" />
        <Profile name="Sydney Simon" role="Social Member" img={SydneySimon} url="https://www.linkedin.com/in/sydney-simon-1468b318b/" />
        <Profile name="Tobias Nguyen" role="Social Member" img={TobiasNguyen} url="https://www.linkedin.com/mwlite/in/tung-nguyen-95195820b" />
        <Profile name="Ethan Zhao" role="Social Member" img={EthanZhao} url="https://ethanxyzhao.com/" />
        <Profile name="Jasper Zhu" role="Social Member" img={JasperZhu} url="https://www.linkedin.com/in/jasper-zhu-827063193" />
            



        
        {/* 
        
        
        <Profile name="Dhatri Medarametla" role="Social Member" img={DhatriMedarametla} url="https://dmed31.github.io/sparkwebsite/" />
        <Profile name="Nwai Alfa" role="Social Member" img={NwaiAlfa} url="https://www.linkedin.com/in/nwai" />
        <Profile name="Rain Yan" role="Social Member" img={RainYan} url="https://github.com/xcupsilon" />
        <Profile name="Jason Saito" role="Red Designer" img={JasonSaito} url="https://www.linkedin.com/in/jason-saito/" />
        <Profile name="Joyce Yoon" role="Social Member" img={JoyceYoon} url="https://www.linkedin.com/in/joyce-yoon-penn/" /> */}


      </div>
    </Layout>
  );
};

export default IndexPage;
