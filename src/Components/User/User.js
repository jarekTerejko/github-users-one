import React from "react";
import {Link} from 'react-router-dom'


const User = props => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <div className="card-image">
            <img src={avatar_url} alt="User" />
            <span className="card-title">{login}</span>
          </div>
          {/* <div className="card-content">
            <p>
              I am a very simple card.
            </p>
          </div> */}
          <div className="card-action">
            <Link to={`/user/${login}`}>More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
