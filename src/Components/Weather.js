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
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THRUSDAY', 'FRIDAY', 'SATURDAY'];
  var d = new Date();
  const n = d.getHours();
  const nd = d.getDay();
  
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
            <div className="d-flex flex-column col-2 align-item-center text-align-center px-4 ">
              <p className="h-25">
                <b>Now</b>
                </p>
              <p className="text-primary">{parseInt(hourly[0].pop*100)===0 ? "" : parseInt(hourly[0].pop*100)+'%'}</p>
              <figure>
                <img 
                  className='img-fluid weather-img'
                  src={'https://openweathermap.org/img/wn/'+hourly[0].weather[0].icon+'@4x.png'}
                  alt={hourly[0].weather.description}
                />
              </figure>
              <p>{Math.ceil(hourly[0].temp)}°</p>
            </div>

            {Object.keys(hourly).map((key, index) => {
              key = parseInt(key);
              if (key === 0 || key > 25) {
                return null;
              }
              return (
                <div key={key} className="d-flex flex-column col-2 align-item-center text-align-center px-4 ">
                  <p className="h-25">{(n+parseInt(key))%24}</p>
                  <p className="text-primary">{parseInt(hourly[key].pop*100)===0 ? "" : parseInt(hourly[key].pop*100)+'%'}</p>
                  <figure>
                    <img 
                      className='img-fluid weather-img'
                      src={'https://openweathermap.org/img/wn/'+hourly[key].weather[0].icon+'@4x.png'}
                      alt={hourly[key].weather.description}
                    />
                  </figure>
                  <p>{Math.ceil(hourly[key].temp)}°</p>
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
        <div className="col-md-12 order-md-5 mt-5">
          <div className='containercurr'>
            <div class="mb-4 list-group list-group-flush">
              <div class="list-group-item d-flex justify-content-between align-item-center row px-0 py-md-0 border-bottom text-align-center day-header">
                <div class="col text-left d-none d-md-block d-lg-block d-xl-block text-muted">
                  <small>DAY</small>
                </div>
                <div class="col d-none d-md-block d-lg-block d-xl-bloc text-mutedk">
                </div>
                <div class="col d-none d-md-block d-lg-block d-xl-block text-muted">
                  <small>CHANCE OF RAIN</small>
                </div>
                <div class="col d-none d-md-block d-lg-block d-xl-block text-muted">
                  <small>HUMIDITY</small>
                </div>
                <div class="col text-right d-none d-md-block d-lg-block d-xl-block text-muted">
                  <small>TEMPERATURE</small>
                </div>
              </div>
              <div class="list-group-item d-flex justify-content-between align-item-center row px-0 py-md-0 border-bottom">
                <div class="col">
                  <p class="mb-0">Today</p>
                </div>
                <div class="col px-2 text-align-center">
                  <img 
                    class="img-fluid weather-img" 
                    src={'https://openweathermap.org/img/wn/'+daily[0].weather[0].icon+'@4x.png'}
                    alt={daily[0].weather.description} 
                  />
                </div>
                <div class="col d-none d-md-block d-lg-block d-xl-block text-align-center">
                  {parseInt(daily[0].pop*100)}%
                </div>
                <div class="col d-none d-md-block text-align-center">
                  {parseInt(daily[0].humidity)}%
                </div>
                <div class="col d-flex flex-row justify-content-end">
                  <p class=" mb-0">H:{parseInt(daily[0].temp.max)+'° '}</p>
                  <p class=" ml-2 mb-0">L:{parseInt(daily[0].temp.min)}°</p>
                </div>
              </div>
              {Object.keys(daily).map((key, index) => {
                key = parseInt(key);
                if (key === 0) {
                  return null;
                }
                console.log(key, nd);
                var day = key + nd;
                day = day % 7;
                console.log(day);
                return (
                  <div class="list-group-item d-flex justify-content-between align-item-center row px-0 py-md-0 border-bottom">
                    <div class="col">
                      <p class="mb-0">{days[day]}</p>
                    </div>
                    <div class="col px-2 text-align-center">
                      <img 
                        class="img-fluid weather-img" 
                        src={'https://openweathermap.org/img/wn/'+daily[key].weather[0].icon+'@4x.png'}
                        alt={daily[0].weather.description} 
                      />
                    </div>
                    <div class="col d-none d-md-block d-lg-block d-xl-block text-align-center">
                      {parseInt(daily[key].pop*100)}%
                    </div>
                    <div class="col d-none d-md-block text-align-center">
                      {parseInt(daily[key].humidity)}%
                    </div>
                    <div class="col d-flex flex-row justify-content-end">
                      <p class=" mb-0">H:{parseInt(daily[key].temp.max)+'° '}</p>
                      <p class=" ml-2 mb-0">L:{parseInt(daily[key].temp.min)}°</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;