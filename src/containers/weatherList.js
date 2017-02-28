import React, {Component} from 'react';
import {connect} from 'react-redux';
import Charts from '../components/charts';

class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;

        const temps = cityData.list.map(weather => weather.main.temp - 273.15);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        console.log(cityData.list);
        return (
            <tr key={name}>
                <td>
                    {name}
                </td>
                <td>
                    <Charts data={temps} color="orange" />
                </td>
                <td>
                    <Charts data={pressures} color="green"/>
                </td>
                <td>
                    <Charts data={humidities} color="black"/>
                </td>
            </tr>
        )
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
                <tbody>
                { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);