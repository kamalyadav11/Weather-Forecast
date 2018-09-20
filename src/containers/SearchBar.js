import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    text: ""
  };

  onChangeText = e => {
    this.setState({ text: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            className="form-control"
            placeholder="Get a 5-day forecast of your favorite cities"
            value={this.state.text}
            onChange={this.onChangeText}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
        </form>
      </div>
    );
  }
}
