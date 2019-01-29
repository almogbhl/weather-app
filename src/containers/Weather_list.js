import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const id = cityData.city.id;

    const { lat, lon } = cityData.city.coord;
    console.log(lat, lon)

    const temps = cityData.list.map(weather => weather.main.temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return(
      <tr key={id}>
        <td><GoogleMap height="120" width="100" lat={lat} lon={lon} /> </td>
        <td>
          <Chart data={temps} units="C" color="orange" />
        </td>
        <td>
          <Chart data={pressures} units="hPa" color="blue" />
        </td>
        <td>
          <Chart data={humidities} units="%" color="red" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  console.log(weather);
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);

// const Td = styled.td `
//     vertical-align: middle;
//     text-align: center;
// `

// const Th = styled.th `
//     vertical-align: middle;
//     text-align: center;
// `


