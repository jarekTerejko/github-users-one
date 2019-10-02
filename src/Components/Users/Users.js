import React from "react";
import { useContext } from "react";
import { GithubContext } from "../../contexts/GithubContext";
import User from "../User/User";
import Loader from "../Loader/Loader";
import "./Users.css";

const Users = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="row">
        <div className="col s12">
          <div className="users-container">
            {users.map(user => {
              return <User key={user.id} user={user} />;
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Users;
