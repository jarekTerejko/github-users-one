import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GithubContext } from "../../contexts/GithubContext";

const Pagination = () => {
  const { usersPerPage, users, doPagination } = useContext(GithubContext);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  if(users.length !== 0) {
    return (
        <div className="row">
          <div className="col s12">
            <ul className="pagination center-align">
              <li>
                <i className="material-icons red-text">chevron_left</i>
              </li>
              {pageNumbers.map(pNum => {
                return (
                  <li key={pNum} className="waves-effect">
                    <Link
                      className="waves-effect"
                      to="/"
                      onClick={() => doPagination(pNum)}
                    >
                      {pNum}
                    </Link>
                  </li>
                );
              })}
              <li>
                <i className="material-icons red-text">chevron_right</i>
              </li>
            </ul>
          </div>
        </div>
      )
  } else {
      return null
  }


};

export default Pagination;
