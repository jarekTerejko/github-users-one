import React, { createContext, useState, useEffect } from "react";

export const GithubContext = createContext();

const GithubContextProvider = props => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await response.json();

      console.log(data);

      setUsers(data);
      setLoading(false);
      showAlert("Users fetched successfully", "green");
    } catch (error) {
      console.log(error);
      showAlert("Failed to fetch", "red");
      setLoading(false);
    }
  };

  const searchUsers = async searchText => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/search/users?q=${searchText}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await response.json();

      console.log(data);

      setUsers(data.items);
      setLoading(false);
      showAlert("Users searched successfully", "green");
    } catch (error) {
      console.log(error);
      showAlert("Failed to fetch", "red");
      setLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search === "") {
      showAlert("please enter a valid text to search", "red");
    } else {
      searchUsers(search);
    }

    setSearch("");
  };

  const clearUsers = () => {
    setUsers([]);
    showAlert("Users cleared successfully", "green");
  };

  const getUser = async login => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await response.json();

      console.log(data);

      setUser(data);
      setLoading(false);
      showAlert("User fetched successfully", "green");
    } catch (error) {
      console.log(error);
      showAlert("Failed to fetch", "red");
      setLoading(false);
    }
  };

  const getUserRepos = async login => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${login}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
      );
      const data = await response.json();
      
      console.log(data);

      setRepos(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      showAlert("Failed to fetch", "red");
      setLoading(false);
    }
  };

  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });

    setTimeout(() => {
      removeAlert();
    }, 5000);
  };

  const removeAlert = () => {
    setAlert(null);
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  const showClearBtn = users.length ? true : false;

  return (
    <GithubContext.Provider
      value={{
        getUsers,
        setLoading,
        setUsers,
        users,
        loading,
        alert,
        removeAlert,
        searchUsers,
        showClearBtn,
        showAlert,
        clearUsers,
        getUser,
        user,
        repos,
        getUserRepos,
        search,
        setSearch,
        handleSubmit
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubContextProvider;
