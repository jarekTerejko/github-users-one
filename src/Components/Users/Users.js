import React from "react";
import User from "../User/User";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";
import './Users.css'

const Users = props => {

  if (props.loading) {
    return <Loader />;
  } else {
    return (
      <div className="row">
        <div className="col s12">
          <div className="users-container">
            {props.users.map(user => {
              return <User key={user.id} user={user} />;
            })}
          </div>
        </div>
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
