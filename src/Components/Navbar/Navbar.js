import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper grey darken-4">
          <a href="/" className="brand-logo center">
            <i className="fab fa-github"></i> {props.title}
          </a>
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
