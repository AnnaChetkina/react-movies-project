import React from "react";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: "",
      type: "all",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFilter = (e) => {
    const { searchStr, type } = this.state;
    this.setState(
      () => ({ type: e.target.value }),
      () => {
        // console.log("handleSearch", searchStr, type);
        // console.log("handleSearch", this.state.searchStr, this.state.type);
        this.props.handleSearch(this.state.searchStr, this.state.type);
        // this.props.handleSearch(searchStr, type);
      }
    );
  };

  handleKey = (e) => {
    const { searchStr, type } = this.state;
    if (e.key === "Enter") {
      this.props.handleSearch(searchStr, type);
    }
  };

  render() {
    const { searchStr, type } = this.state;
    return (
      <div className="input-field">
        <input
          value={searchStr}
          name="searchStr"
          onChange={this.handleChange}
          onKeyDown={this.handleKey}
          className="validate"
          placeholder="search"
          type="text"
        />
        <div className="row">
          <div className="col s4">
            <label>
              <input
                name="type"
                type="radio"
                checked={type === "all"}
                disabled={!searchStr}
                value="all"
                onChange={this.handleFilter}
              />
              <span>All</span>
            </label>
          </div>
          <div className="col s4">
            <label>
              <input
                name="type"
                type="radio"
                checked={type === "movie"}
                disabled={!searchStr}
                value="movie"
                onChange={this.handleFilter}
              />
              <span>Movies only</span>
            </label>
          </div>
          <div className="col s4">
            <label>
              <input
                name="type"
                type="radio"
                checked={type === "series"}
                disabled={!searchStr}
                value="series"
                onChange={this.handleFilter}
              />
              <span>Series only</span>
            </label>
          </div>
        </div>

        <button
          onClick={() => this.props.handleSearch(searchStr, type)}
          className="btn search-btn"
          disabled={!searchStr}
        >
          Search
        </button>
      </div>
    );
  }
}
