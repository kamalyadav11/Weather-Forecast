import React, { Component } from "react";
import { connect } from "react-redux";
import { Sparklines, SparklinesLine } from "react-sparklines";

class WeatherList extends Component {
  renderCityList(cityData) {
    const { id, name } = cityData.city;
    const temprature = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>
          <Sparklines height={100} width={180} data={temprature}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={100} width={180} data={pressure}>
            <SparklinesLine color="red" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={100} width={180} data={humidity}>
            <SparklinesLine color="green" />
          </Sparklines>
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
