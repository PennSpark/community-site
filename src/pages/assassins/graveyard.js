import * as React from "react";

import "./style.css";

import CathyImg from "./img/cathy.png"
import KaitlynImg from "./img/kaitlyn.png"
import YanjieImg from "./img/yanjie.png"
import AlyssaImg from "./img/alyssa.png"
import AndrewImg from "./img/andrew.png"

class TombStone extends React.Component {
  render() {
    return <div style={{display: "inline-block"}}>
      <div className="assassins-tombstone" ><div style={{height: "8px"}}/>
        <p>{this.props.name}
          <br/>
          3/21 - {this.props.death}
        </p><br/><br/>
        <img src={this.props.src} style={{width: "90px", height: "80px"}}/>
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
         
          
        </div>
      </body>
    </html>
  );
};

export default GraveyardPage;
