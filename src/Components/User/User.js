import React from "react";

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
          <div className="card-content">
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
          <div className="card-action">
            <a href={html_url}>This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
