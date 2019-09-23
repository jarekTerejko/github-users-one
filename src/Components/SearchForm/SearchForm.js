import React, { useState } from "react";
import PropTypes from "prop-types";

const SearchForm = ({ showAlert, searchUsers, showClearBtn, clearUsers }) => {
  const [search, setSearch] = useState("");

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search === "") {
      showAlert("Please enter text to search", "red");
    } else {
      searchUsers(search);
      setSearch("");
    }
  };

  return (
    <div className="row" style={{ marginTop: "30px" }}>
      <div className="col s12">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                name="search"
                id="search"
                type="text"
                className="validate"
                onChange={handleChange}
              />
              <label htmlFor="search">Search Users...</label>
            </div>
          </div>
          <button className="btn" type="submit">
            Search
          </button>
          {showClearBtn && (
            <button
              className="btn waves-effect waves-light"
              onClick={clearUsers}
            >
              Clear
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

SearchForm.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearBtn: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired
};

export default SearchForm;
