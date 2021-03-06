import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper grey darken-4">
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Link to="/" style={{paddingLeft: "15px"}}>
            <i className="fab fa-github"></i> {props.title}
          </Link>
        </div>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  title: "GitHub Users"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
