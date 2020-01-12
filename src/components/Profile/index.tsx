import React, { Component } from "react";
import "./styles.scss";

interface ProfileProps {
  photo: string;
  name: string;
  email: string;
  phone: string;
}

class Profile extends Component<ProfileProps> {
  render() {
    const { photo, name, email, phone } = this.props;
    return (
      <div className="containerProfile">
        <div className="d-flex flex-column justify-content-center align-items-center headerInfo">
          <div className="containerAvatar">
            <img src={photo} alt="avatar" className="avatar" />
          </div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
        {/* <div className="d-flex flex-column justify-content-center align-items-start">
          <p>{email}</p>
          <p>{phone}</p>
        </div> */}
      </div>
    );
  }
}

export default Profile;
