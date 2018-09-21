import React, { Component } from "react";
import { connect } from "react-redux";
import Charts from "../components/Charts";
import GoogleMap from "../components/GoogleMap";

class WeatherList extends Component {
  renderCityList(cityData) {
    const { id } = cityData.city;
    const { lon, lat } = cityData.city.coord;
    const temperature = _.map(
      cityData.list.map(weather => weather.main.temp),
      temp => temp - 273
    );
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    return (
      <tr key={id}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Charts data={temperature} color={"blue"} units="C" />
        </td>
        <td>
          <Charts data={pressure} color={"red"} units="hPA" />
        </td>
        <td>
          <Charts data={humidity} color={"green"} units="%" />
        </td>
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
              <th>Temperature(C)</th>
              <th>Pressure(hPA)</th>
              <th>Humidity(%)</th>
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
