import React, { Component } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Users from "./Components/Users/Users";

export default class App extends Component {
  state = {
    users: [],
    loading: false
  };

  getUsers = async () => {
    this.setState({ loading: true });

    const response = await fetch("https://api.github.com/users");
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

    this.getUsers()
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
