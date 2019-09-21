import React, { Component, Fragment } from "react";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./UserDetails.css";

export default class UserDetails extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  };

  render() {
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
    } = this.props.user;

    

    const { loading } = this.props;

    if (loading) {
      return <Loader />;
    } else {
      return (
        <Fragment>
          <Link className="waves-effect waves-light btn" to="/">
          <i className="material-icons left">keyboard_arrow_left</i>Back To Search
          </Link>
          <div className="row">
            <div className="col offset-m2 m8 s12">
              <div class="card">
                <div
                  class="card-image"
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

                  <p>Hireable: 
                  {
                    hireable ? (
                      <i class="material-icons green-text">check</i>
                    ) : (
                      <i class="material-icons red-text">clear</i>
                    )
                  }
                  </p>
                </div>
                <div class="card-content">
                  {bio && (
                    <Fragment>
                      <h5>Bio</h5>
                      <p>{bio}</p>
                    </Fragment>
                  )}
                  <ul class="collection">
                    {login && (
                      <li class="collection-item">
                        Username: <strong>{login}</strong>
                      </li>
                    )}
                    {company && (
                      <li class="collection-item">
                        Company: <strong>{company}</strong>
                      </li>
                    )}
                    {blog && (
                      <li class="collection-item">
                        Web: <a href={blog} target="_blank" rel="noopener noreferrer"><strong>{blog}</strong></a>
                      </li>
                    )}
                  </ul>
                  <div className="badges-container">
                    {followers && (
                      <span class="my-badge  brown darken-1" style={{ color: "#fff" }}>
                        Followers: {followers}
                      </span>
                    )}
                    {following && (
                      <span class="my-badge red" style={{ color: "#fff" }}>
                        Following: {following}
                      </span>
                    )}
                    {public_repos && (
                      <span class="my-badge purple" style={{ color: "#fff" }}>
                        Repos: {public_repos}
                      </span>
                    )}
                    {public_gists && (
                      <span class="my-badge cyan" style={{ color: "#fff" }}>
                        Gist: {public_gists}
                      </span>
                    )}
                  </div>
                </div>
                <div class="card-action">
                  <a href={html_url} className="brown-text" target="_blank" rel="noopener noreferrer">
                   GitHub Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}
