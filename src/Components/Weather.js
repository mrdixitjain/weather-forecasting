import '../css/Weather.css';
import {formatTime} from '../helpers/Helpers';

const Weather = (props) => {
  const weatherData = props.weatherData;
  const current = props.weatherData.current;
  const daily = props.weatherData.daily;
  const hourly = props.weatherData.hourly;
  const offset = parseInt(weatherData.timezone_offset);
  const sunrise = formatTime(parseInt(current.sunrise), offset);
  const sunset = formatTime(parseInt(current.sunset), offset);
  console.log(sunrise);
  var d = new Date();
  const n = d.getHours();

  
  console.log(weatherData);
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
        <div className="col-md-8 container order-md-2">
          <div className='d-flex flex-row overflow-auto border-top border-bottom pb-2 pt-2'>
            <div className="d-flex flex-column col-2 align-items-center text-align-center px-4 ">
              <p className="h-25"><b>Now</b></p>
              <p className="text-primary">{hourly[0].pop*100}%</p>
              <figure>
                <img 
                  className='img-fluid weather-img'
                  src={'https://openweathermap.org/img/wn/'+hourly[0].weather[0].icon+'@4x.png'}
                  alt={hourly[0].weather.description}
                />
              </figure>
              <p>{Math.ceil(hourly[0].temp)}%</p>
            </div>

            {Object.keys(hourly).map((key, index) => {
              if (key === 0 || key > 23) {
                return null;
              }
              return (
                <div key={key} className="d-flex flex-column col-2 align-items-center text-align-center px-4 ">
                  <p className="h-25">{(n+parseInt(key))%24}</p>
                  <p className="text-primary">{hourly[key].pop*100}%</p>
                  <figure>
                    <img 
                      className='img-fluid weather-img'
                      src={'https://openweathermap.org/img/wn/'+hourly[key].weather[0].icon+'@4x.png'}
                      alt={hourly[key].weather.description}
                    />
                  </figure>
                  <p>{Math.ceil(hourly[key].temp)}%</p>
                </div>
              )
            })}  
          </div>
          <div className="mt-2 mb-2">
            Today : {current.weather[0].main}. Today high will be {Math.ceil(daily[0].temp.max)}°. Today low will be {Math.ceil(daily[0].temp.min)}°.
          </div>
        </div>
        <div className='col-md-12 order-md-4 bg-dark pt-5 pb-5 mt-2'>
          <div className='containercurr'>
            <div className='row list-group-flush flex-column flex-md-row justify-content-center border-bottom  border-dark'>
              <li className='list-group-item pl-md-2 col text-md-center weather-description bg-dark text-white'>
                <small className="text-muted">SUNRISE</small>
                <h5 className="mb-0 font-weight-normal">{sunrise}</h5>
              </li>
              <li className='list-group-item pl-md-2 col text-md-center weather-description bg-dark text-white'>
                <small className="text-muted">SUNSET</small>
                <h5 className="mb-0 font-weight-normal">{sunset}</h5>
              </li>
              <li className='list-group-item pl-md-2 col text-md-center weather-description bg-dark text-white'>
                <small className="text-muted">CHANCE OF RAIN</small>
                <h5 className="mb-0 font-weight-normal">{sunset}</h5>
              </li>
              <li className='list-group-item pl-md-2 col text-md-center weather-description bg-dark text-white'>
                <small className="text-muted">HUMIDITY</small>
                <h5 className="mb-0 font-weight-normal">{sunset}</h5>
              </li>
              <li className='list-group-item pl-md-2 col text-md-center weather-description bg-dark text-white'>
                <small className="text-muted">WIND</small>
                <h5 className="mb-0 font-weight-normal">{sunset}</h5>
              </li>
              <li className='list-group-item pl-md-2 col text-md-center weather-description bg-dark text-white'>
                <small className="text-muted">SUNSET</small>
                <h5 className="mb-0 font-weight-normal">{sunset}</h5>
              </li>
              <li className='list-group-item pl-md-2 col text-md-center weather-description bg-dark text-white'>
                <small className="text-muted">SUNSET</small>
                <h5 className="mb-0 font-weight-normal">{sunset}</h5>
              </li>
              <li className='list-group-item pl-md-2 col text-md-center weather-description bg-dark text-white'>
                <small className="text-muted">SUNSET</small>
                <h5 className="mb-0 font-weight-normal">{sunset}</h5>
              </li>
              <li className='list-group-item pl-md-2 col text-md-center weather-description bg-dark text-white'>
                <small className="text-muted">SUNSET</small>
                <h5 className="mb-0 font-weight-normal">{sunset}</h5>
              </li>
              <li className='list-group-item pl-md-2 col text-md-center weather-description bg-dark text-white'>
                <small className="text-muted">SUNSET</small>
                <h5 className="mb-0 font-weight-normal">{sunset}</h5>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;