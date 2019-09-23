import React, { useState,Fragment, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import About from "./Pages/About/About";
import SearchForm from "./Components/SearchForm/SearchForm";
import Alert from "./Components/Alert/Alert";

const App = () => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)

  const getUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await response.json();
      console.log(data);

      setUsers(data)
      setLoading(false)

      showAlert("Users fetched successfully", "green");
    } catch (error) {
      console.log(error);
      showAlert("Failed to fetch", "red");
      setLoading(false)
    }
  };

  const searchUsers = async searchText => {
    console.log(searchText);

    setLoading(true)
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    const data = await response.json();
    console.log(data);

    setUsers(data.items)
    setLoading(false)
  };

  const getUser = async login => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await response.json();
      console.log(data);

        setUser(data)
        setLoading(false)

      showAlert("User fetched successfully", "green");
    } catch (error) {
      console.log(error);
      showAlert("Failed to fetch", "red");
      setLoading(false)
    }
  };

  const clearUsers = () => {
    setUsers([])
  };

  const getUserRepos = async login => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://api.github.com/users/${login}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await response.json();
      console.log(data);

      setRepos(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
      showAlert("Failed to fetch", "red");
    setLoading(false)
}
  };

  const showAlert = (msg, type) => {
    setAlert( { msg: msg, type: type})

    setTimeout(() => {
      removeAlert();
    }, 5000);
  };

  const removeAlert = () => {
    setAlert( null );
  };



  useEffect(() => {
    getUsers()
  }, [])


    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <div className="container">
            <Alert alert={alert} removeAlert={removeAlert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <SearchForm
                      searchUsers={searchUsers}
                      clearUsers={clearUsers}
                      showAlert={showAlert}
                      removeAlert={removeAlert}
                      showClearBtn={users.length ? true : false}
                    />
                    <Users
                      loading={loading}
                      users={users}
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
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </Fragment>
      </BrowserRouter>
    );
  }


  export default App

