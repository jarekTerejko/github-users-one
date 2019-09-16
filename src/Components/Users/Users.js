import React from "react";
import User from "../User/User";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";


const Users = props => {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px"
  };

  if (props.loading) {
    return <Loader />;
  } else {
    return (
      <div style={userStyle}>
        {props.users.map(user => {
          return <User key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
}

export default Users;
