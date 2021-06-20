import '../css/Weather.css';
import { formatTime } from '../helpers/Helpers';

const CurrentWeather = (props) => {
  const weatherData = props.weatherData;
  const hourly = weatherData.hourly;
  const current = weatherData.current;
  const daily = weatherData.daily;
  const offset = parseInt(weatherData.timezone_offset);
  const sunrise = formatTime(parseInt(current.sunrise), offset);
  const sunset = formatTime(parseInt(current.sunset), offset);

  return (
    <div className='col-md-12 order-md-4 bg-dark pt-5 pb-5 mt-2'>
      <div className='containercurr'>
        <div className='row list-group-flush flex-column flex-md-row justify-content-center border-bottom  border-dark'>
          <li className='list-group-item pl-md-2 text-md-center weather-description bg-dark text-white w-72'>
            <small className="text-muted">SUNRISE</small>
            <h5 className="mb-0 font-weight-normal">{sunrise}</h5>
          </li>
          <li className='list-group-item pl-md-2 text-md-center weather-description bg-dark text-white w-72'>
            <small className="text-muted">SUNSET</small>
            <h5 className="mb-0 font-weight-normal">{sunset}</h5>
          </li>
          <li className='list-group-item pl-md-2 text-md-center weather-description bg-dark text-white w-72'>
            <small className="text-muted">CHANCE OF RAIN</small>
            <h5 className="mb-0 font-weight-normal">{parseInt(hourly[0].pop*100)}%</h5>
          </li>
          <li className='list-group-item pl-md-2 text-md-center weather-description bg-dark text-white w-72'>
            <small className="text-muted">HUMIDITY</small>
            <h5 className="mb-0 font-weight-normal">{parseInt(current.humidity)}</h5>
          </li>
          <li className='list-group-item pl-md-2 text-md-center weather-description bg-dark text-white w-72'>
            <small className="text-muted">WIND</small>
            <h5 className="mb-0 font-weight-normal">{parseInt(current.wind_speed)} Km/Hr</h5>
          </li>
          <li className='list-group-item pl-md-2 text-md-center weather-description bg-dark text-white w-72'>
            <small className="text-muted">FEELS LIKE</small>
            <h5 className="mb-0 font-weight-normal">{parseInt(current.feels_like)}°</h5>
          </li>
          <li className='list-group-item pl-md-2 text-md-center weather-description bg-dark text-white w-72'>
            <small className="text-muted">PRECIPITATION</small>
            <h5 className="mb-0 font-weight-normal">{daily[0].rain}CM</h5>
          </li>
          <li className='list-group-item pl-md-2 text-md-center weather-description bg-dark text-white w-72'>
            <small className="text-muted">PRESSURE</small>
            <h5 className="mb-0 font-weight-normal">{parseInt(current.pressure)} hPa</h5>
          </li>
          <li className='list-group-item pl-md-2 text-md-center weather-description bg-dark text-white w-72'>
            <small className="text-muted">VISIBILITY</small>
            <h5 className="mb-0 font-weight-normal">{sunset}</h5>
          </li>
          <li className='list-group-item pl-md-2 text-md-center weather-description bg-dark text-white w-72'>
            <small className="text-muted">UV INDEX</small>
            <h5 className="mb-0 font-weight-normal">{current.uvi}</h5>
          </li>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;