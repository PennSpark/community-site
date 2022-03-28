import * as React from "react";

import RulesPdf from "./Assassins_Rules.pdf";
import AssassinImg from "./img/assassin.png"
import WilliamImg from "./img/williamz.png"
import ChristiImg from "./img/christig.png"

import "./style.css";

const Kills = () => {
  return <span style={{color: "white", backgroundColor: "red", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", fontFamily: "sans-serif", fontWeight: "500"}}>KILLS</span>
}

const Revives = () => {
  return <span style={{color: "white", backgroundColor: "green", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", fontFamily: "sans-serif", fontWeight: "500"}}>REVIVES</span>
}

const Alive = () => {
  return <span style={{fontSize: "0.8rem", color: "white", backgroundColor: "green", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", fontFamily: "sans-serif", fontWeight: "500", marginLeft: "4px"}}>ALIVE 😳</span>
}

const Dead = () => {
  return <span style={{fontSize: "0.8rem", color: "white", backgroundColor: "red", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", fontFamily: "sans-serif", fontWeight: "500", marginLeft: "4px"}}>DEAD 💀</span>
}

const Limbo = () => {
  return <span style={{fontSize: "0.8rem", color: "white", backgroundColor: "brown", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", fontFamily: "sans-serif", fontWeight: "500", marginLeft: "4px"}}>LIMBO 👻</span>
}

const Quarantine = () => {
  return <span style={{fontSize: "0.8rem", color: "white", backgroundColor: "orange", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", fontFamily: "sans-serif", fontWeight: "500", marginLeft: "4px"}}>QUARANTINE ☢️</span>
}


class ActivityItem extends React.Component {
  render() {
    return <li><strong style={{fontFamily: "sans-serif", 
    // textTransform: "uppercase", 
    verticalAlign: "middle"}}>[<em>{this.props.date}</em>]</strong>: {this.props.children}</li>
  }
}

const AssassinsPage = () => {
  return (
    <html>
      <head></head>
      <body id="assassins-body">
        <div id="assassins-page">
          
          
          <div className="assassins-box" style={{ borderColor: "purple" }}>
            <h1><a href="http://pennspark.org/" target="_blank">spark</a> x <a href="https://thesign.al/" target="_blank">signal</a> assassins 🔪🔪</h1><br/>

            <p style={{fontSize: "1rem", fontFamily: "sans-serif"}}>SITE LAST UPDATED: March 28, 2022 at 02:46pm EST</p><br/>
            <p>
              <a href="graveyard" style={{textDecoration: "none"}}>
                <div className="graveyard-link">
                <span style={{color: "#b82416", fontSize: "2.3rem", textDecoration: "underline"}}>🪦 Graveyard &rarr;</span><br/>
                  pay respects to the dead...
                </div>
              </a>
            </p><br/>
          </div>

          <div className="assassins-box" style={{ borderColor: "teal" }}>
          <h2>CONGRATS TO THE WINNERS!</h2><br/>
          <p style={{fontSize: "2rem"}}>
            William Z. and Christiana G.
          </p>
          <img src={WilliamImg} style={{width: "200px", height: "200px", display: "inline-block", margin: "8px", border: "5px solid gold"}}/>
          <img src={ChristiImg} style={{width: "200px", height: "200px", display: "inline-block", margin: "8px", border: "5px solid gold"}}/>
          <p style={{fontSize: "1.5rem"}}>
            for winning $5 ea
          </p>
          </div>
         
          <div className="assassins-box" style={{ borderColor: "blue" }}>
            <h2>GAME RULES</h2><br/>
            <p>
              <a href={RulesPdf} target="_blank" style={{color: "#1d6cf5", fontSize: "2rem"}}>📜 Game Rules &rarr;</a>
            </p>
            <br/><br/>
            <h2>PATCH NOTES</h2><br/>
            <p style={{ lineHeight: "140%", textAlign: "left" }}>
            <p style={{textAlign: "center"}}>4.0</p>
              <br />
              &bull; as stated before, there’s no more immunity (socks) or revivals!<br/>
              &bull; there are no more assignments for teams. each team assignment can now assassinate any team
            </p><br/>
            <p style={{ lineHeight: "140%", textAlign: "left" }}>
            <p style={{textAlign: "center"}}>3.1</p>
              <br />
              &bull; If a quarantine person's partner loses both lives, the quarantined person also dies.
            </p>
            <br/>
            <p style={{ lineHeight: "140%", textAlign: "left" }}>
              <p style={{textAlign: "center"}}>3.0</p>
              <br />&bull; for any group that has an individual in quarantine, the
              other member of the group will have 2 lives until the quarantined
              member is out. if the non quarantined member of the group loses a
              life before the quarantined member comes out of quarantine and
              does not/is unable to revive, then only the previously quarantined
              member will be alive.<br/>
              &bull; if you cannot physically make it to the
              ben franklin bench, you must walk up to a stranger and say “i am a
              peasant who is incapable of protecting myself from a rubber
              balloon” and have your other team member record it
            </p>
            <br/>
            <p style={{ lineHeight: "140%", textAlign: "left" }}>
            <p style={{textAlign: "center"}}>2.0</p>
              <br />
              &bull;the dead/limbo person must hold an L on their forehead in the picture for maximum clarity and humiliation
            </p>
          </div>



          <div className="assassins-box" style={{ borderColor: "red" }}>
            <h2>STATUSES</h2>
            <div className="graveyard-50" >
            <p style={{ textAlign: "left" }}>
              <ul>
              <li>Acelyn Choi<Alive/> ❤️❤️</li>
                <li>Adarsh Rao<Dead/></li>
                <li>Alyssa Nie<Dead/></li>
                <li>Andrew Jiang<Dead/></li>
                <li>Anna Wang<Dead/></li>
                <li>Anna Xia<Dead/></li>
                <li>Cathy Chen<Dead/></li>
                <li>Chelsea Cheng<Alive/> ❤️❤️</li>
                <li>Christian Sun<Alive/> ❤️</li>
                <li>Christiana Guan<Alive/> ❤️</li>
                <li>Cindy Xu<Alive/> ❤️❤️</li>
                <li>Claire Wang<Alive/> ❤️</li>
              </ul>
            </p>
          </div>
          <div className="graveyard-50">
            <p style={{ textAlign: "left" }}>
              <ul>
              <li>Claire Zhang<Alive/> ❤️❤️</li>
                <li>Eric Wang<Alive/> ❤️</li>
                <li>Ethan Zhao<Dead/></li>
                <li>Grace Jiang<Dead/></li>
                <li>Isabelle Lin<Alive/> ❤️</li>
                <li>Jimmy Ren<Alive/> ❤️❤️</li>
                <li>Kaitlyn Rentala<Dead/></li>
                <li>Lauren Kafkaloff<Alive/> ❤️❤️</li>
                <li>Leo Huang<Dead/></li>
                <li>Marcel Kida<Alive/> ❤️❤️</li>
                <li>Matthew Dong<Alive/> ❤️</li>
                <li>Molly Xiao<Dead/></li>
              </ul>
            </p>
          </div>
          <div className="graveyard-50">
            <p style={{ textAlign: "left" }}>
              <ul>
                <li>Olivia Zha<Dead/></li>
                <li>Paul Loh<Alive/> ❤️❤️</li>
                <li>Rain Yan<Dead/></li>
                <li>Sophie Huang<Dead/></li>
                <li>Sophie Shen<Dead/></li>
                <li>Subin Kim<Alive/> ❤️❤️</li>
                <li>Sumanth Kadiyala<Alive/> ❤️❤️</li>
                <li>William Zong<Alive/> ❤️❤️</li>
                <li>Yanjie Zhang<Dead/></li>
                <li>Yuhan Liu<Alive/> ❤️</li>
              </ul>
            </p>
          </div>
         </div>


          {/* START ACTIVITY LOG */}
          <div className="assassins-box" style={{ borderColor: "green" }}>
            <h2>ACTIVITY LOG</h2><br/>

            <p style={{textAlign: "left", margin: "24px", fontSize: "0.8rem"}}>
              <ol>
              <ActivityItem date="03/27 at 09:09 PM">William Z. <Kills/> Sophie H.</ActivityItem>
              <ActivityItem date="03/27 at 03:43 PM">William Z. <Kills/> Anna X.</ActivityItem>
              <ActivityItem date="03/26 at 12:00 PM">Grace J. <Kills/> Grace J.</ActivityItem>
              <ActivityItem date="03/26 at 09:58 AM">William Z. <Kills/> Adarsh R.</ActivityItem>
              <ActivityItem date="03/25 at 11:51 PM">Isabelle L. <Revives/> Sophie H.</ActivityItem>
              <ActivityItem date="03/25 at 10:29 PM">Eric W. <Kills/> Olivia Z.</ActivityItem>
              <ActivityItem date="03/25 at 05:17 PM">Eric W. <Kills/> Leo H.</ActivityItem>
              <ActivityItem date="03/25 at 01:28 PM">Grace J. <Kills/> Sophie H.</ActivityItem>
              <ActivityItem date="03/24 at 11:59 PM">Eric W. <Kills/> Ethan Z.</ActivityItem>
              <ActivityItem date="03/24 at 11:43 PM">Eric W. <Revives/> Eric W.</ActivityItem>
              <ActivityItem date="03/24 at 10:16 PM">Rain Y. <Kills/> Rain Y. (Quarantine Patch)</ActivityItem>
              <ActivityItem date="03/24 at 05:08 PM">Cindy X. <Kills/> Eric W.</ActivityItem>
              <ActivityItem date="03/24 at 12:11 AM">Marcel K. <Kills/> Yanjie Z.</ActivityItem>
              <ActivityItem date="03/23 at 11:41 PM">William Z. <Revives/> Christi G.</ActivityItem>
              <ActivityItem date="03/23 at 10:16 PM">Yanjie Z. <Kills/> Molly X.</ActivityItem>
              <ActivityItem date="03/23 at 10:12 PM">William Z. <Kills/> Anna W.</ActivityItem>
              <ActivityItem date="03/23 at 10:11 PM">Sophie H. <Kills/> Sophie S.</ActivityItem>
              <ActivityItem date="03/23 at 08:56 PM">William Z. <Kills/> Alyssa N.</ActivityItem>
              <ActivityItem date="03/23 at 08:56 PM">William Z. <Kills/> Andrew J.</ActivityItem>
              <ActivityItem date="03/23 at 07:19 PM">Leo H. <Revives/> Ethan Z.</ActivityItem>
              <ActivityItem date="03/23 at 01:34 PM">Grace J. <Revives/> Yanjie Z.</ActivityItem>
              <ActivityItem date="03/23 at 12:41 PM">Anna W. <Revives/> Adarsh R.</ActivityItem>
              <ActivityItem date="03/23 at 12:39 PM">Claire Z. <Revives/> Christian S.</ActivityItem>
              <ActivityItem date="03/23 at 11:34 AM">Eric W. <Revives/> Matthew D.</ActivityItem>
              <ActivityItem date="03/22 at 09:04 PM">Eric W. <Kills/> Ethan Z.</ActivityItem>
              <ActivityItem date="03/22 at 09:00 PM">Marcel K. <Kills/> Yanjie Z.</ActivityItem>
              <ActivityItem date="03/22 at 08:24 PM">Andrew J. <Kills/> Adarsh R.</ActivityItem>
              <ActivityItem date="03/22 at 08:07 PM">Claire W. <Kills/> Christian S.</ActivityItem>
              <ActivityItem date="03/22 at 12:57 PM">Yanjie Z. <Kills/> Kaitlyn R.</ActivityItem>
                <ActivityItem date="03/22 at 11:56 AM">Jimmy R. <Kills/> Matthew D.</ActivityItem>
                <ActivityItem date="03/22 at 12:13 AM">Sumanth K. <Kills/> Christi G.</ActivityItem>
                <ActivityItem date="03/22 at 12:05 AM">Sumanth K. <Revives/> Yuhan L.</ActivityItem>
                <ActivityItem date="03/21 at 09:34 PM">Paul L. <Revives/> Claire W.</ActivityItem>
                <ActivityItem date="03/21 at 06:34 PM">Yanjie Z. <Kills/> Cathy C.</ActivityItem>
                <ActivityItem date="03/21 at 06:29 PM">Anna X. <Kills/> Yuhan L.</ActivityItem>
                <ActivityItem date="03/21 at 01:41 PM">Anna W. <Kills/> Claire W.</ActivityItem>

              </ol>
            </p>          
          </div>
          {/* END ACTIVITY LOG */}

          <div style={{textAlign: "center", marginTop: "70px"}}>
            <img id="assassins-img" src={AssassinImg} style={{width: "80%", maxWidth: "180px"}}/><br/>
          </div>
        </div>
      </body>
    </html>
  );
};

export default AssassinsPage;
