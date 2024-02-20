import React from "react";
import RadioBtn from "./RadioBtn";
import { RadioButtonsData } from "../dict";

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

  handleFilter = (value) => {
    this.setState(
      () => ({ type: value }),
      () => {
        this.props.handleSearch(this.state.searchStr, this.state.type);
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
          {RadioButtonsData.map((btn) => (
            <RadioBtn
              key={btn.id}
              checked={type === btn.typeProp}
              disabled={!searchStr}
              handleFilter={this.handleFilter}
              {...btn}
            />
          ))}
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
