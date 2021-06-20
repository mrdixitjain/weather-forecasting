import '../css/Weather.css';

const HourlyWeather = (props) => {
    const hourly = props.hourly;
    var d = new Date();
    const n = d.getHours();

    return (
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
        Today : {props.main}. Today high will be {Math.ceil(props.max)}°. Today low will be {Math.ceil(props.min)}°.
      </div>
    </div>
  );
}

export default HourlyWeather;