import * as React from "react";

import "./style.css";

import CathyImg from "./img/cathy.png"
import KaitlynImg from "./img/kaitlyn.png"
import YanjieImg from "./img/yanjie.png"
import AlyssaImg from "./img/alyssa.png"
import AndrewImg from "./img/andrew.png"
import SophieImg from "./img/sophie.png"
import AnnaImg from "./img/anna.png"
import MollyImg from "./img/molly.png"
import RainImg from "./img/rain.png"
import EthanImg from "./img/ethan.png"
import LeoImg from "./img/leo.png"
import OliviaImg from "./img/olivia.png"
import GracImg from "./img/grac.png"
import AdarshImg from "./img/adarsh.png"
import AnnaXiaImg from "./img/annaxia.png"
import SophieHuangImg from "./img/sophiehuang.png"

class TombStone extends React.Component {
  render() {
    return <div style={{display: "inline-block"}}>
      <div className="assassins-tombstone" ><div style={{height: "18px"}}/>
        <p style={{fontSize: "0.9rem"}}>{this.props.name}
          <br/>
          3/21 - {this.props.death}
        </p><div style={{height: "36px"}}/>
        <img src={this.props.src} style={{width: "80px", height: "80px"}}/>
      </div>
    </div>
  }
}

const GraveyardPage = () => {
  return (
    <html>
      <head></head>
      <body id="graveyard-body">
        <div id="graveyard-page">
        <h2 style={{fontSize: "2rem"}}>
              <a href="/assassins">&larr; back</a>
            </h2>
            <h1>graveyard</h1>
            <br/>
          <div className="assassins-box" style={{ borderColor: "#363636" }}>
            <p style={{fontSize: "1.2rem"}}><em>"How people die remains in the memory of those who live on"</em> – Dame Cicely Saunders<br/>
            <em>"Our dead are never dead to us, until we have forgotten them"</em> – George Eliot<br/>
            <em>"naur 😔😔🙏😩😩😩😿👻☠️☠️☠️"</em> – Spark Exec
            </p>
          </div>
          <div style={{height: "50px"}}/>
        <div>
        <TombStone src={SophieHuangImg} name="Sophie" death="3/27"/>
        <TombStone src={AnnaXiaImg} name="Anna" death="3/27"/>
        <TombStone src={AdarshImg} name="Adarsh" death="3/26"/>
        <TombStone src={GracImg} name="Grace" death="3/26"/>
        <TombStone src={OliviaImg} name="Olivia" death="3/25"/>
        <TombStone src={LeoImg} name="Leo" death="3/25"/>
        <TombStone src={EthanImg} name="Ethan" death="3/24"/>
        <TombStone src={RainImg} name="Rain" death="3/24"/>
        <TombStone src={MollyImg} name="Molly" death="3/23"/>
        <TombStone src={AnnaImg} name="Anna" death="3/23"/>
        <TombStone src={SophieImg} name="Sophie" death="3/23"/>
        <TombStone src={YanjieImg} name="Yanjie" death="3/23"/>
        <TombStone src={AlyssaImg} name="Alyssa" death="3/23"/>
        <TombStone src={AndrewImg} name="Andrew" death="3/23"/>
        <TombStone src={KaitlynImg} name="Kaitlyn" death="3/22"/>
          <TombStone src={CathyImg} name="Cathy" death="3/22"/>
        </div>
        <br/>
         
          
        </div>
      </body>
    </html>
  );
};

export default GraveyardPage;
