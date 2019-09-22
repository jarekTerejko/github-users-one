import React from "react";
import { Link } from "react-router-dom";

const User = props => {
  const { login, avatar_url } = props.user;
  return (
    <div className="card">
      <div className="card-image">
        <img src={avatar_url} alt="User" />
        <span className="card-title">{login}</span>
      </div>
      <div className="card-action">
        <Link to={`/user/${login}`}>User details</Link>
      </div>
    </div>
  );
};

export default User;
