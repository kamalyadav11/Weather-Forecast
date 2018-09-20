import React, { Component } from "react";
import { connect } from "react-redux";

class WeatherList extends Component {
  renderCityList(cityData) {
    const { id, name } = cityData.city;
    return (
      <tr key={id}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead>
          <tbody>{this.props.weather.map(this.renderCityList)}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);
