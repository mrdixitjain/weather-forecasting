import '../css/Weather.css';
import DailyWeather from './DailyWeather';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';

const Weather = (props) => {
  const weatherData = props.weatherData;
  const current = props.weatherData.current;
  const daily = props.weatherData.daily;
  const hourly = props.weatherData.hourly;
  return (
    <div className="mt-10">
      <div className="row align-item-center justify-content-center">
        <div className="col-md-4 container order-md-1">
          <div className='d-flex flex-column align-item-center' >
            <h2>{weatherData.name}</h2>
            <h4>{current.weather[0].main}</h4>
            <h1 className='ml-3'>{Math.ceil(current.temp)}°</h1>
            <div className='d-flex'>
              <p className='mx-1'>H:{Math.ceil(daily[0].temp.max)}°</p>
              <p className='mx-1'>L:{Math.ceil(daily[0].temp.min)}°</p>
            </div>
          </div>
        </div>
        <HourlyWeather 
          hourly={hourly} 
          main={current.weather[0].main}
          max={daily[0].temp.max}
          min={daily[0].temp.min}
        />
        <CurrentWeather weatherData={weatherData}/>
        <DailyWeather daily={daily} />
      </div>
    </div>
  );
}

export default Weather;