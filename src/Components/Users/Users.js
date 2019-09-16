import React, { Component } from "react";
import User from "../User/User";

export default class Users extends Component {
  
  userStyle ={
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px"
  }


  render() {
    return (
      <div style={this.userStyle}>
        {this.props.users.map(user => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    );
  }

   
}
