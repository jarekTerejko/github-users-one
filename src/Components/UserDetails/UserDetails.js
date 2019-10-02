import React, { useEffect, Fragment, useContext } from "react";
import Loader from "../Loader/Loader";
import { GithubContext } from "../../contexts/GithubContext";
import { Link } from "react-router-dom";
import "./UserDetails.css";
import Repos from "../Repos/Repos";

const UserDetails = ({ match }) => {
  const { getUser, getUserRepos, loading, repos, user } = useContext(
    GithubContext
  );

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <Fragment>
        <div className="row">
          <div className="col s12">
            <div style={{ marginTop: "15px", marginBottom: "15px" }}>
              <Link className="waves-effect waves-light btn" to="/">
                <i className="material-icons left">keyboard_arrow_left</i>Back
                To Search
              </Link>
            </div>
            <div className="card">
              <div
                className="card-image"
                style={{
                  paddingTop: "24px",
                  paddingLeft: "24px",
                  paddingRight: "24px"
                }}
              >
                <img src={avatar_url} style={{ width: "150px" }} alt="User" />
                <h5>{name}</h5>
                <p>
                  Location: <strong>{location}</strong>
                </p>

                <p>
                  Hireable:{" "}
                  {hireable ? (
                    <i className="fas fa-check green-text"></i>
                  ) : (
                    <i className="fas fa-times red-text "></i>
                  )}
                </p>
                <div className="badges-container">
                  {followers && (
                    <span
                      className="my-badge brown darken-1"
                      style={{ color: "#fff" }}
                    >
                      Followers: {followers}
                    </span>
                  )}
                  {following && (
                    <span className="my-badge red" style={{ color: "#fff" }}>
                      Following: {following}
                    </span>
                  )}
                  {public_repos && (
                    <span className="my-badge purple" style={{ color: "#fff" }}>
                      Repos: {public_repos}
                    </span>
                  )}
                  {public_gists && (
                    <span className="my-badge cyan" style={{ color: "#fff" }}>
                      Gist: {public_gists}
                    </span>
                  )}
                </div>
              </div>
              <div className="card-content">
                {bio && (
                  <Fragment>
                    <h5>Bio</h5>
                    <p style={{ paddingBottom: "20px" }}>{bio}</p>
                  </Fragment>
                )}
                <ul className="collection">
                  {login && (
                    <li className="collection-item">
                      Username: <strong>{login}</strong>
                    </li>
                  )}
                  {company && (
                    <li className="collection-item">
                      Company: <strong>{company}</strong>
                    </li>
                  )}
                  {blog && (
                    <li className="collection-item">
                      Web:{" "}
                      <a href={blog} target="_blank" rel="noopener noreferrer">
                        <strong>{blog}</strong>
                      </a>
                    </li>
                  )}
                </ul>
                <Repos repos={repos} />
              </div>
              <div className="card-action">
                <a
                  href={html_url}
                  className="brown-text"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default UserDetails;
