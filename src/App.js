import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import About from "./Pages/About/About";
import SearchForm from "./Components/SearchForm/SearchForm";
import Alert from "./Components/Alert/Alert";

export default class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  };

  getUsers = async () => {
    try {
      this.setState({ loading: true });
      const response = await fetch(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await response.json();
      console.log(data);

      this.setState({ loading: false, users: data });

      this.showAlert("Users fetched successfully", "green");
    } catch (error) {
      console.log(error);
      this.showAlert("Failed to fetch", "red");
      this.setState({ loading: false });
    }
  };

  searchUsers = async searchText => {
    console.log(searchText);

    this.setState({ loading: true });
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await response.json();
    console.log(data);

    this.setState({ loading: false, users: data.items });
  };

  getUser = async login => {
    try {
      this.setState({ loading: true });
      const response = await fetch(
        `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await response.json();
      console.log(data);

      this.setState({ loading: false, user: data });

      this.showAlert("User fetched successfully", "green");
    } catch (error) {
      console.log(error);
      this.showAlert("Failed to fetch", "red");
      this.setState({ loading: false });
    }
  };

  clearUsers = () => {
    this.setState({ users: [] });
  };

  getUserRepos = async login => {
    try {
      this.setState({ loading: true });
      const response = await fetch(
        `https://api.github.com/users/${login}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await response.json();
      console.log(data);

      this.setState({ loading: false, repos: data });
    } catch (error) {
      console.log(error);
      this.showAlert("Failed to fetch", "red");
      this.setState({ loading: false });
    }
  };

  showAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => {
      this.removeAlert();
    }, 5000);
  };

  removeAlert = () => {
    this.setState({ alert: null });
  };

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} removeAlert={this.removeAlert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <SearchForm
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showAlert={this.showAlert}
                      removeAlert={this.removeAlert}
                      showClearBtn={this.state.users.length ? true : false}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <UserDetails
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={this.state.user}
                    repos={this.state.repos}
                    loading={this.state.loading}
                  />
                )}
              />
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }
}
