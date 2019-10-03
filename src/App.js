import React, { Fragment } from "react";
import GithubContextProvider from "./contexts/GithubContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/UserDetails/UserDetails";
import About from "./Pages/About/About";
import SearchForm from "./Components/SearchForm/SearchForm";
import Alert from "./Components/Alert/Alert";
import Pagination from "./Components/Pagination/Pagination";


const App = () => {
  return (
    <BrowserRouter>
      <GithubContextProvider>
        <Fragment>
          <Navbar />
          <div className="container">
            <Alert />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <SearchForm />
                    <Users />
                    <Pagination />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => <UserDetails 
                  {...props}
                />}
              />
            </Switch>
          </div>
        </Fragment>
      </GithubContextProvider>
    </BrowserRouter>
  );
};

export default App;
