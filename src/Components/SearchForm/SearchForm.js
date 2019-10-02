import React, { useContext } from "react";
import { GithubContext } from "../../contexts/GithubContext";

const SearchForm = () => {
  const {
    showClearBtn,
    clearUsers,
    search,
    setSearch,
    handleSubmit
  } = useContext(GithubContext);

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
                onChange={e => setSearch(e.target.value)}
                value={search}
              />
              <label htmlFor="search">Search Users...</label>
            </div>
          </div>
          <button className="waves-effect waves-light btn" type="submit">
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

export default SearchForm;
