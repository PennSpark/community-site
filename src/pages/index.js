import * as React from "react";


import Layout from "../components/layout";
import Profile from "../components/profile";
import Navbar from "../components/navbar";

import AllyChen from "../images/headshots/ally-chen.jpg"
import AndreVanDeVen from "../images/headshots/andre-van-de-ven.jpg"
import AndreiPiterbarg from "../images/headshots/andrei-piterbarg.jpg"
import AndrewChang from "../images/headshots/andrew-chang.jpg"
import AngieCao from "../images/headshots/angie-cao.jpeg"
import AniNguyenLe from "../images/headshots/ani-nguyen-le.jpeg"
import AprilZhang from "../images/headshots/april-zhang.jpg"
import BriannaKwan from "../images/headshots/brianna-kwan.jpg"
import BrandonYan from "../images/headshots/brandon-yan.jpg"
import BrianLee from "../images/headshots/brian-lee.jpg"
import BryanChung from "../images/headshots/bryan-chung.jpg"
import CindyWei from "../images/headshots/cindy-wei.jpg"
import DavidLee from "../images/headshots/david-lee.jpeg"
import EmilyKang from "../images/headshots/emily-kang.jpeg"
import EmmiWu from "../images/headshots/emmi-wu.jpg"
import EricLee from "../images/headshots/eric-lee.png"
import EricZou from "../images/headshots/eric-zou.jpg"
import EstelleKim from "../images/headshots/estelle-kim.jpeg"
import FionaHerzog from "../images/headshots/fiona-herzog.jpg"
import FionaJiang from "../images/headshots/fiona-jiang.jpeg"
import GabrielThiessen from "../images/headshots/gabriel-thiessen.jpeg"
import GiaGupta from "../images/headshots/gia-gupta.png"
import HemosooWu from "../images/headshots/hemosoo-wu.jpg"
import JamesBaker from "../images/headshots/james-baker.jpg"
import JasmineWang from "../images/headshots/jasmine-wang.png"
import JasperZhu from "../images/headshots/jasper-zhu.jpg"
import JaymeChen from "../images/headshots/jayme-chen.jpeg"
import JiminChoi from "../images/headshots/jimin-choi.jpg"
import JohnnyJeong from "../images/headshots/johnny-jeong.jpg"
import JoyceChen from "../images/headshots/joyce-chen.jpeg"
import JosephDattilo from "../images/headshots/joseph-dattilo.jpeg"
import Kashyap from "../images/headshots/kashyap.jpg"
import KatherineYue from "../images/headshots/katherine-yue.jpeg"
import KeiTaketsuna from "../images/headshots/kei-taketsuna.jpg"
import KevinWei from "../images/headshots/kevin-wei.jpeg"
import LucaPicazo from "../images/headshots/luca-picazo.jpeg"
import LukaKoll from "../images/headshots/luka-koll.jpg"
import LukeTong from "../images/headshots/luke-tong.jpg"
import LunaChen from "../images/headshots/luna-chen.jpeg"
import LoriBrown from "../images/headshots/lori-brown.jpeg"
import MaryLiu from "../images/headshots/mary-liu.jpg"
import MeganYang from "../images/headshots/megan-yang.jpeg"
import MeilingMathur from "../images/headshots/meiling-mathur.png"
import MelodyZhang from "../images/headshots/melody-zhang.jpeg"
import MichaelLi from "../images/headshots/michael-li.jpeg"
import NatalieLim from "../images/headshots/natalie-lim.jpg"
import NickCirillo from "../images/headshots/nick-cirillo.png"
import NondPhokasub from "../images/headshots/nond-phokasub.jpg"
import NishatOlayiwola from "../images/headshots/nishat-olayiwola.jpg"
import OliviaHu from "../images/headshots/olivia-hu.jpg"
import RaelynnCui from "../images/headshots/raelynn-cui.jpg"
import RaphaelMartinez from "../images/headshots/raphael-martinez.png"
import RuthZhao from "../images/headshots/ruth-zhao.png"
import SamPark from "../images/headshots/sam-park.png"
import SumanthKadiyala from "../images/headshots/sumanth-kadiyala.jpg"
import SurabhiSharma from "../images/headshots/surabhi-sharma.jpg"
import SarahChan from "../images/headshots/sarah-chan.png"
import SethSukboontip from "../images/headshots/seth-sukboontip.jpg"
import ShauryaSarma from "../images/headshots/shaurya-sarma.jpg"
import TermTaepaisitphongse from "../images/headshots/term-taepaisitphongse.jpg" 
import WesleyLiu from "../images/headshots/wesley-liu.jpg"
import XimingLuo from "../images/headshots/ximing-luo.jpg"
import XueJiang from "../images/headshots/xue-jiang.jpg"
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

      <div className="content-section" style={{ marginBottom: "0px" }}>
        <h2>Spring '25 Members</h2>
      </div>

      <div id="profiles-section">
        <div className="content-section" style={{ marginBottom: "10px" }}>
          <h3>Executive Board</h3>
        </div>
        {/* Board */}
        <Profile name="Nick Cirillo" role="Co-President & Project Lead" img={NickCirillo} url="https://www.linkedin.com/in/nicholas-cirillo-/" />
        <Profile name="André van de Ven" role="Co-President" img={AndreVanDeVen} url="https://www.andrevandeven.us/" />
        <Profile name="Meiling Mathur" role="VP External" img={MeilingMathur} url="https://www.linkedin.com/in/meilingmathur/" />
        <Profile name="Megan Yang" role="VP Internal" img={MeganYang} url="megyang@seas.upenn.edu" />
        <Profile name="Jasmine Wang" role="VP Red" img={JasmineWang} url="https://jasminewangux.com/" />
        <Profile name="Raphael Martinez" role="VP Blue" img={RaphaelMartinez} url="" />
        <Profile name="Luke Tong" role="Social Chair & Mentor" img={LukeTong} url="https://www.linkedin.com/in/luke-rt/" />
        <Profile name="Emmi Wu" role="Marketing Chair & Project Lead" img={EmmiWu} url="" />
      </div>

      <div id="profiles-section">
        <div className="content-section" style={{ marginBottom: "10px" }}>
          <h3>Project Leads</h3>
        </div>
        {/* PLs */}
        <Profile name="Angie Cao" role="Project Lead" img={AngieCao} url="https://www.linkedin.com/in/angelina-cao-78a0551a5" />
        <Profile name="Luna Chen" role="Project Lead" img={LunaChen} url="https://www.linkedin.com/in/luna-chen-9246501b0/" />
        <Profile name="Estelle Kim" role="Project Lead" img={EstelleKim} url="https://www.linkedin.com/in/estelle-kim-41b1b7218/" />
        <Profile name="Ruth Zhao" role="Project Lead" img={RuthZhao} url="https://www.linkedin.com/in/ruth-zhao-450446251/" />
        <Profile name="Shaurya Sarma" role="Project Lead" img={ShauryaSarma} url="https://www.linkedin.com/in/shaurya-sarma/" />
        <Profile name="April Zhang" role="Project Lead" img={AprilZhang} url="" />
      </div>

      <div id="profiles-section">
        <div className="content-section" style={{ marginBottom: "10px" }}>
          <h3>Spark Red Designers</h3>
        </div>
        {/* Red Design */}
        <Profile name="Ally Chen" role="Red Designer" img={AllyChen} url="https://allychen.me/" />
        <Profile name="Bryan Chung" role="Red Designer" img={BryanChung} url="https://www.bran.organic/" />
        <Profile name="Raelynn Cui" role="Red Designer" img={RaelynnCui} url="" />
        <Profile name="Ani Nguyen Le" role="Red Designer" img={AniNguyenLe} url="https://www.linkedin.com/in/ani-nguyen-le-0788a1220" />
        <Profile name="Brian Lee" role="Red Designer" img={BrianLee} url="https://www.linkedin.com/in/brian-lee-0b706b225/" />
        <Profile name="Nond Phokasub" role="Red Designer" img={NondPhokasub} url="https://bynond.com/" />
      </div>

      <div id="profiles-section">
        <div className="content-section" style={{ marginBottom: "10px" }}>
          <h3>Spark Red Developers</h3>
        </div>
        {/* Red Dev */}
        <Profile name="Lori Brown" role="Red Developer" img={LoriBrown} url="https://www.linkedin.com/in/lori-brown-17a653248/" />
        <Profile name="Andrew Chang" role="Red Developer" img={AndrewChang} url="" />
        <Profile name="Joyce Chen" role="Red Developer" img={JoyceChen} url="https://joycezchen.myportfolio.com/work" />
        <Profile name="Jimin Choi" role="Red Developer" img={JiminChoi} url="https://jiminchoi.com" />
        <Profile name="Joseph Dattilo" role="Red Developer" img={JosephDattilo} url="https://www.linkedin.com/in/joe-dattilo/" />
        <Profile name="Fiona Jiang" role="Red Developer" img={FionaJiang} url="http://linkedin.com/in/fiona-jiang-62b6a31b2" />
        <Profile name="Xue Jiang" role="Red Developer" img={XueJiang} url="https://xue-portfolio.vercel.app/" />
        <Profile name="Luka Koll" role="Red Developer" img={LukaKoll} url="https://www.linkedin.com/in/luka-koll-704715274/" />
        <Profile name="David Lee" role="Red Developer" img={DavidLee} url="" />
        <Profile name="Natalie Lim" role="Red Developer" img={NatalieLim} url="https://www.linkedin.com/in/natalie-lim-593953222/" />
        <Profile name="Ximing Luo" role="Red Developer" img={XimingLuo} url="https://www.ximingluo.com" />
        <Profile name="Cindy Wei" role="Red Developer" img={CindyWei} url="https://www.linkedin.com/in/cindy-wei-7ba778227/" />
        <Profile name="Hemosoo Wu" role="Red Developer" img={HemosooWu} url="" />
        <Profile name="Brandon Yan" role="Red Developer" img={BrandonYan} url="https://www.brandonvyan.com/" />
        <Profile name="Katherine Yue" role="Red Developer" img={KatherineYue} url="https://www.linkedin.com/in/katherine-yue/" />
        <Profile name="Eric Zou" role="Red Developer" img={EricZou} url="https://ezou626.github.io" />
      </div>

      <div id="profiles-section">
        <div className="content-section" style={{ marginBottom: "10px" }}>
          <h3>Spark Blue Designers</h3>
        </div>
        {/* Blue Design */}
        <Profile name="Zara Baig" role="Blue Designer" img={ZaraBaig} url="" />
        <Profile name="Nishat Olayiwola" role="Blue Designer" img={NishatOlayiwola} url="https://nishatolay.netlify.app/" />
        <Profile name="Luca Picazo" role="Blue Designer" img={LucaPicazo} url="https://lkplorenzo.wixsite.com/breakeven" />
        <Profile name="Surabhi Sharma" role="Blue Designer" img={SurabhiSharma} url="" />
        <Profile name="Kevin Wei" role="Blue Designer" img={KevinWei} url="https://kevinwei.itch.io/" />
        <Profile name="Melody Zhang" role="Blue Designer" img={MelodyZhang} url="https://drive.google.com/drive/folders/15JxR0x9xpSuJKatoIyEU47xBR_9-ez3d" />
      </div>

      <div id="profiles-section">
        <div className="content-section" style={{ marginBottom: "10px" }}>
          <h3>Spark Blue Developers</h3>
        </div>
        {/* Blue Dev */}
        <Profile name="Jayme Chen" role="Blue Developer" img={JaymeChen} url="" />
        <Profile name="Gia Gupta" role="Blue Developer" img={GiaGupta} url="" />
        <Profile name="Olivia Hu" role="Blue Developer" img={OliviaHu} url="https://github.com/olivianhu" />
        <Profile name="Brianna Kwan" role="Blue Developer" img={BriannaKwan} url="https://www.linkedin.com/in/brianna-kwan-929413228" />
        <Profile name="Wesley Liu" role="Blue Developer" img={WesleyLiu} url="https://www.linkedin.com/in/wesley-liu-067518212/" />
        <Profile name="Seohyun (Sam) Park" role="Blue Developer" img={SamPark} url="" />
        <Profile name="Seth Sukboontip" role="Blue Developer" img={SethSukboontip} url="https://www.linkedin.com/in/seth-sukboontip/" />
        <Profile name="Kei Taketsuna" role="Blue Developer" img={KeiTaketsuna} url="https://www.linkedin.com/in/keitsuna/" />
      </div>

      <div id="profiles-section">
        <div className="content-section" style={{ marginBottom: "10px" }}>
          <h3>Mentors</h3>
        </div>
        {/* Mentors */}
        <Profile name="James Baker" role="Mentor" img={JamesBaker} url="https://www.linkedin.com/in/james-baker-4694b7206" />
        <Profile name="Kashyap Chaturvedula" role="Mentor" img={Kashyap} url="https://www.linkedin.com/in/kashyap-chaturvedula-596682162/" />
        <Profile name="Johnny Jeong" role="Mentor" img={JohnnyJeong} url="https://www.linkedin.com/in/jaeheon-jeong-ab0761223" />
        <Profile name="Sumanth Kadiyala" role="Mentor" img={SumanthKadiyala} url="https://www.linkedin.com/in/sumanthkadiyala/" />

      </div>

      <div id="profiles-section" style={{ marginBottom: "64px" }}>
        <div className="content-section" style={{ marginBottom: "10px" }}>
          <h3>Social Members</h3>
        </div>
        {/* Social Members */}
        <Profile name="Sarah Chan" role="Social Member" img={SarahChan} url="" />
        <Profile name="Fiona Herzog" role="Social Member" img={FionaHerzog} url="" />
        <Profile name="Emily Kang" role="Social Member" img={EmilyKang} url="https://www.linkedin.com/in/emily-kang-67b55b20a" />
        <Profile name="Eric Lee" role="Social Member" img={EricLee} url="https://www.ericslee.dev" /> 
        <Profile name="Michael Li" role="Social Member" img={MichaelLi} url="https://github.com/Michaell14" /> 
        <Profile name="Mary Liu" role="Social Member" img={MaryLiu} url="" />
        <Profile name="Andrei Piterbarg" role="Social Member" img={AndreiPiterbarg} url="https://apiterbarg.com" />
        <Profile name="Term Taepaisitphongse" role="Social Member" img={TermTaepaisitphongse} url="" />
        <Profile name="Gabriel Thiessen" role="Social Member" img={GabrielThiessen} url="https://github.com/bingberpbuck" />
        <Profile name="Yue Zhao" role="Social Member" img={YueZhao} url="https://www.linkedin.com/in/yue-zhao-janie/" />
        <Profile name="Jasper Zhu" role="Social Member" img={JasperZhu} url="https://www.linkedin.com/in/jasper-zhu-827063193" />
      </div>
    </Layout>
  );
};

export default IndexPage;
