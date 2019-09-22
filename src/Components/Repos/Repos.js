import React from "react";
import PropTypes from "prop-types";
import Repo from "../Repo/Repo";

const Repos = ({ repos }) => {
  return (
    <ul className="collection">
      <li className="collection-item">
        <h5>Latest Repositories</h5>
      </li>
      {repos.map(repo => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </ul>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
