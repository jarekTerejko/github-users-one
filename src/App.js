import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Users from "./Components/Users/Users";
import Loader from "./Components/Loader/Loader";

export default class App extends Component {
  state = {
    users: [],
    loading: false
  };

  getUsers = async () => {
    this.setState({ loading: true });
    const response = await fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    const data = await response.json();
    console.log(data);

    this.setState({ loading: false, users: data });
  };

  componentDidMount() {
    // this.setState({ loading: true });

    // const response = await fetch("https://api.github.com/users");
    // const data = await response.json();
    // console.log(data);

    // this.setState({ loading: false, users: data });


    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    this.getUsers()
  }

  render() {
    return (
      <div>
        <Navbar />
        {/* <Loader /> */}
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
