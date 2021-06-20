import '../css/Weather.css';

const DailyWeather = (props) => {
  const daily = props.daily;
  const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THRUSDAY', 'FRIDAY', 'SATURDAY'];
  var d = new Date();
  const nd = d.getDay();
  return (
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
            var day = key + nd;
            day = day % 7;
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
  );
}

export default DailyWeather;