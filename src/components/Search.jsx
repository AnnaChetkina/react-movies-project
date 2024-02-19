import React from "react";
import RadioBtn from "./RadioBtn";

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
        // console.log(this.state);
      }
    );
  };

  handleKey = (e) => {
    const { searchStr, type } = this.state;
    if (e.key === "Enter") {
      this.props.handleSearch(searchStr, type);
    }
  };

  // getChecked = (radioBtn) => {
  //   console.log(this.state.type, radioBtn.typeProp)
  //   return true
  // }

  RadioButtonsData = [
    {
      id: "1",
      // name: "type",
      typeProp: "all",
      value: "all",
      text: "All",
    },
    {
      id: "2",
      // name: "type",
      typeProp: "movie",
      value: "movie",
      text: "Movies only",
    },
    {
      id: "3",
      // name: "type",
      typeProp: "series",
      value: "series",
      text: "Series only",
    },
    {
      id: "4",
      // name: "type",
      typeProp: "game",
      value: "game",
      text: "Games only",
    },
  ];

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
          {/* <div className="col s4">
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
                className="with-gap"
                name="type"
                type="radio"
                checked={type === "series"}
                disabled={!searchStr}
                value="series"
                onChange={this.handleFilter}
              />
              <span>Series only</span>
            </label>
          </div> */}
          {this.RadioButtonsData.map((radioBtn) => (
            <RadioBtn
              key={radioBtn.id}
              // checked={this.getChecked(radioBtn)}
              // checked={this.type === radioBtn.typeProp}
              // disabled={!searchStr}
              handleFilter={this.handleFilter}
              {...radioBtn}
            />
          ))}
        </div>

        <button
          onClick={() => 
            console.log("type", type)
            // this.props.handleSearch(searchStr, type)
          }
          className="btn search-btn"
          disabled={!searchStr}
        >
          Search
        </button>
      </div>
    );
  }
}
