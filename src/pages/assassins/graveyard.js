import * as React from "react";

import "./style.css";

const Alive = () => {
  return <span style={{color: "green", fontWeight: "800"}}>&nbsp;ALIVE 😳</span>
}

const Dead = () => {
  return <span style={{color: "red", fontWeight: "800"}}>&nbsp;DEAD 💀</span>
}

const Limbo = () => {
  return <span style={{color: "brown", fontWeight: "800"}}>&nbsp;LIMBO 👻</span>
}

const Quarantine = () => {
  return <span style={{color: "orange", fontWeight: "800"}}>&nbsp;QUARANTINE ☢️</span>
}


const GraveyardPage = () => {
  return (
    <html>
      <head></head>
      <body>
        <div id="graveyard-page">
          <h1>graveyard</h1>
          <h2 style={{fontSize: "2rem"}}>
            <a href="/assassins">&larr; back</a>
          </h2><br/>
         <div style={{backgroundColor: "rgb(255, 255, 255, 0.8)", padding: "24px"}}>
            <h2>STATUSES</h2>
            <div
            style={{
              display: "inline-block",
              width: "40%",
              padding: "5%",
              paddingTop: "10px"
            }}
          >
            <p style={{ textAlign: "left" }}>
              <ul>
                <li>Adarsh Rao<Alive/></li>
                <li>Alyssa Nie<Dead/></li>
                <li>Andrew Jiang<Dead/></li>
                <li>Anna Wang<Limbo/></li>
                <li>Anna Xia<Alive/></li>
                <li>Cathy Chen<Dead/></li>
                <li>Chelsea Cheng<Alive/></li>
                <li>Christian Sun<Alive/></li>
                <li>Christiana Guan<Alive/></li>
                <li>Christina Lu<Alive/><Quarantine/></li>
                <li>Cindy Xu<Alive/></li>
                <li>Claire Wang<Alive/></li>
                <li>Claire Zhang<Alive/></li>
                <li>Emily Guo<Alive/><Quarantine/></li>
                <li>Eric Wang<Limbo/></li>
                <li>Ethan Zhao<Alive/></li>
                <li>Grace Jiang<Alive/></li>
                <li>Ian Zhang<Alive/></li>
               
              </ul>
            </p>
          </div>
          <div
            style={{
              display: "inline-block",
              width: "40%",
              padding: "5%",
              paddingTop: "10px"
            }}
          >
            <p style={{ textAlign: "left" }}>
              <ul>
              <li>Isabelle Lin<Alive/></li>
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
