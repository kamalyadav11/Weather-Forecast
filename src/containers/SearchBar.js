import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="input-group">
          <input type="text" />
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
