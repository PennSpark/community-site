import * as React from "react";

import RulesPdf from "./Assassins_Rules.pdf";

import "./style.css";

const Kills = () => {
  return <span style={{color: "white", backgroundColor: "red", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", fontFamily: "sans-serif", fontWeight: "500"}}>KILLS</span>
}

const Revives = () => {
  return <span style={{color: "white", backgroundColor: "green", borderRadius: "10px", paddingLeft: "8px", paddingRight: "8px", fontFamily: "sans-serif", fontWeight: "500"}}>REVIVES</span>
}

class ActivityItem extends React.Component {
  render() {
    return <li><strong style={{fontFamily: "sans-serif", textTransform: "uppercase", verticalAlign: "middle"}}>[<em>{this.props.date}</em>]</strong>: {this.props.children}</li>
  }
}

const AssassinsPage = () => {
  return (
    <html>
      <head></head>
      <body>
        <div id="assassins-page">
          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.8)", fontSize: "2rem", padding: "24px", border: "5px solid purple", margin: "20px"  }}>
            <h1><a href="http://pennspark.org/" target="_blank">spark</a> x <a href="https://thesign.al/" target="_blank">signal</a> assassins</h1><br/>

            <p>SITE LAST UPDATED: March 24, 6:47pm EST</p><br/>
            <p>
              <a href={RulesPdf} target="_blank" style={{color: "#1d6cf5"}}>Game Rules &rarr;</a>
            </p>
            <p>
              <a href="graveyard" style={{color: "#b82416"}}>Graveyard &rarr;</a>
            </p><br/>
          </div>

          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.8)", padding: "24px", border: "5px solid green", margin: "20px" }}>
            <h2>ACTIVITY LOG</h2><br/>

            <p style={{textAlign: "left", margin: "24px", fontSize: "0.8rem"}}>
              <ol>
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

          <div style={{ backgroundColor: "rgb(255, 255, 255, 0.8)", padding: "24px", border: "5px solid blue", margin: "20px"  }}>
            <h2>PATCH NOTES</h2><br/>
            <p style={{ fontSize: "1.1rem", lineHeight: "140%", textAlign: "left" }}>
            <p style={{textAlign: "center"}}>3.1</p>
              <br />
              &bull; If a quarantine person's partner loses both lives, the quarantined person also dies.
            </p>
            <br/>
            <p style={{ fontSize: "1.1rem", lineHeight: "140%", textAlign: "left" }}>
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
            <p style={{ fontSize: "1.1rem", lineHeight: "140%", textAlign: "left" }}>
            <p style={{textAlign: "center"}}>2.0</p>
              <br />
              &bull;the dead/limbo person must hold an L on their forehead in the picture for maximum clarity and humiliation
            </p>
          </div>
        </div>
      </body>
    </html>
  );
};

export default AssassinsPage;
