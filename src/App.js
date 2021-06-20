import React, { Component} from "react";
import * as apiFncs from "./helpers/api";
import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import Loading from "./Components/Loading";

async function getWeather() {
  const city = apiFncs.getCity();
  const coordUrl = apiFncs.buildCoordsUrl(city);
  const coords = await apiFncs.getCoordinates(coordUrl);
  const requestForecastUrl = apiFncs.buildForecastUrl(coords, 'metric');
  const weatherData = await apiFncs.getForecast(requestForecastUrl);
  weatherData.name = coords.name;
  weatherData.country = coords.country;
  return weatherData;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
      isLoading: true,
    }
  }  
  async componentDidMount() {
    // console.log("hello");
    const weatherData = await getWeather();
    this.setState({
      weatherData: weatherData,
      isLoading: false,
    });
  }
  getWeatherData = async (e) => {
    e.preventDefault();
    const weatherData = await getWeather();
    this.setState({
      weatherData: weatherData
    });
  }  
  render() {
    if (this.state.isLoading) {
      return (
        <Loading />
      );
    }
    return (
      <div>
        <Navbar
          getWeatherData={this.getWeatherData} 
        />
        <Weather 
          weatherData={this.state.weatherData}/>
      </div>
    );
  }
}

export default App;

