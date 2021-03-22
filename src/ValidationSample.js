import React, { Component } from "react";
import "./ValidationSample.css";
class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleClick = () => {
    this.setState({
      clicked: true,
      validated: this.password === 1219,
    });
  };

  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked === true
              ? this.state.validated === true
                ? "success"
                : "failure"
              : ""
          }
        />
        <button type="button" onClick={this.handleClick}>
          검증하기
        </button>
      </div>
    );
  }
}

export default ValidationSample;
