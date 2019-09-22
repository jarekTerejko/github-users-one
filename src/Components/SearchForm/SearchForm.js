import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SearchForm extends Component {
  state = {
    search: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearBtn: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search === "") {
      this.props.showAlert("Please enter text to search", "red");
    } else {
      this.props.searchUsers(this.state.search);
      this.setState({ search: "" });
    }
  };
  render() {
    return (
      <div className="row" style={{ marginTop: "30px" }}>
      <div className="col s12">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="search"
                id="search"
                type="text"
                className="validate"
                onChange={this.handleChange}
              />
              <label htmlFor="search">Search Users...</label>
            </div>
          </div>
          <button className="btn" type="submit">
            Search
          </button>
          {this.props.showClearBtn && (
            <button
              className="btn waves-effect waves-light"
              onClick={this.props.clearUsers}
            >
              Clear
            </button>
          )}
        </form>
        </div>
      </div>
    );
  }
}
