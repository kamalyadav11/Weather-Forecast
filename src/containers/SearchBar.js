import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class SearchBar extends Component {
  state = {
    text: ""
  };

  onChangeText = e => {
    this.setState({ text: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.fetchWeather(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            className="form-control"
            placeholder="Get a 5-day average weather forecast of your favorite cities"
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
