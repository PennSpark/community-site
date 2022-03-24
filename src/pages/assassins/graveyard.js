import * as React from "react";

import "./style.css";

import CathyImg from "./img/cathy.png"
import KaitlynImg from "./img/kaitlyn.png"
import YanjieImg from "./img/yanjie.png"
import AlyssaImg from "./img/alyssa.png"
import AndrewImg from "./img/andrew.png"

const Alive = () => {
  return <span style={{color: "white", fontWeight: "800", backgroundColor: "green", borderRadius: "10px"}}>&nbsp;ALIVE 😳&nbsp;</span>
}

const Dead = () => {
  return <span style={{color: "white", fontWeight: "800", backgroundColor: "red", borderRadius: "10px"}}>&nbsp;DEAD 💀&nbsp;</span>
}

const Limbo = () => {
  return <span style={{color: "white", fontWeight: "800", backgroundColor: "brown", borderRadius: "10px"}}>&nbsp;LIMBO 👻&nbsp;</span>
}

const Quarantine = () => {
  return <span style={{color: "white", fontWeight: "800", backgroundColor: "orange", borderRadius: "10px"}}>&nbsp;QUARANTINE ☢️&nbsp;</span>
}

class TombStone extends React.Component {
  render() {
    return <div style={{display: "inline-block"}}>
      <div className="assassins-tombstone" ><div style={{height: "8px"}}/>
        <p>{this.props.name}
          <br/>
          3/21 - {this.props.death}
        </p><br/><br/>
        <img src={this.props.src} style={{width: "60px", height: "80px"}}/>
      </div>
    </div>
  }
}

const GraveyardPage = () => {
  return (
    <html>
      <head></head>
      <body>
        <div id="graveyard-page">
        <h2 style={{fontSize: "2rem"}}>
              <a href="/assassins">&larr; back</a>
            </h2>
            <h1>graveyard</h1>
            <br/>
        <div>
        <TombStone src={YanjieImg} name="Yanjie" death="3/23"/>
        <TombStone src={AlyssaImg} name="Alyssa" death="3/23"/>
        <TombStone src={AndrewImg} name="Andrew" death="3/23"/>
        <TombStone src={KaitlynImg} name="Kaitlyn" death="3/22"/>
          <TombStone src={CathyImg} name="Cathy" death="3/22"/>
        </div>
        <br/>
         <div style={{backgroundColor: "rgb(255, 255, 255, 0.8)", padding: "24px"}}>
            <h2>STATUSES</h2>
            <div className="graveyard-50" >
            <p style={{ textAlign: "left" }}>
              <ul>
              <li>Acelyn Choi<Alive/></li>
                <li>Adarsh Rao<Alive/></li>
                <li>Alyssa Nie<Dead/></li>
                <li>Andrew Jiang<Dead/></li>
                <li>Anna Wang<Limbo/></li>
                <li>Anna Xia<Alive/></li>
                <li>Cathy Chen<Dead/></li>
                <li>Chelsea Cheng<Alive/></li>
                <li>Christian Sun<Alive/></li>
                <li>Christiana Guan<Alive/></li>
                <li>Cindy Xu<Alive/></li>
                <li>Claire Wang<Alive/></li>
                <li>Claire Zhang<Alive/></li>
                <li>Eric Wang<Limbo/></li>
                <li>Ethan Zhao<Alive/></li>
                <li>Grace Jiang<Alive/></li>
                <li>Isabelle Lin<Alive/></li>
              </ul>
            </p>
          </div>
          <div className="graveyard-50">
            <p style={{ textAlign: "left" }}>
              <ul>
                <li>Jimmy Ren<Alive/></li>
                <li>Kaitlyn Rentala<Dead/></li>
                <li>Lauren Kafkaloff<Alive/></li>
                <li>Leo Huang<Alive/></li>
                <li>Marcel Kida<Alive/></li>
                <li>Matthew Dong<Alive/><Quarantine/></li>
                <li>Molly Xiao<Limbo/></li>
                <li>Olivia Zha<Alive/></li>
                <li>Paul Loh<Alive/></li>
                <li>Rain Yan<Alive/><Quarantine/></li>
                <li>Sophie Huang<Alive/></li>
                <li>Sophie Shen<Limbo/></li>
                <li>Subin Kim<Alive/></li>
                <li>Sumanth Kadiyala<Alive/></li>
                <li>William Zong<Alive/></li>
                <li>Yanjie Zhang<Dead/></li>
                <li>Yuhan Liu<Alive/></li>
              </ul>
            </p>
          </div>
         </div>
          
        </div>
      </body>
    </html>
  );
};

export default GraveyardPage;
