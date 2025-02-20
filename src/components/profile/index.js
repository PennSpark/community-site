import React from "react";

import "../../styles/global.css";
import "./style.css";

class Profile extends React.Component {
  render() {
    return (
      <a href={this.props.url} target="_blank" rel="noopener noreferrer" >
        <div className="profile">
          <img className="profile-image" src={this.props.img} />
          <div className="profile-text">
            <h2 className="profile-name">{this.props.name}</h2>
            <p className="profile-role">{this.props.role}</p>
          </div>
        </div>
      </a>
    );
  }
}

export default Profile;