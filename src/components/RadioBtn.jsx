import React from "react";
export default class RadioBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "all",
    };
  }

  handleChange = (e) => {
    console.log("handleChange 1=", e.target.value);
    this.setState(
      () => ({ type: e.target.value }),
      () => {
        // console.log("handleChange 2=", this.state.type);
        console.log("handleChange 2=", e.target.value);
        this.props.handleFilter(e.target.value);
      }
    );
  };

  render() {
    const { name, typeProp, disabled, value, text } = this.props;
    console.log("radiobtn")
    // console.log(
    //   "render radiobtn",
    //   this.state.type,
    //   typeProp,
    //   this.state.type === typeProp
    // );
    return (
      <div className="col s4">
        <label>
          <input
            className="with-gap"
            // name={name}
            name="type"
            type="radio"
            checked={this.state.type === typeProp}
            disabled={disabled}
            value={value}
            onChange={this.handleChange}
          />
          <span>{text}</span>
        </label>
      </div>
    );
  }
}
