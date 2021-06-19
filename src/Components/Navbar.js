import '../css/Navbar.css';
const Navbar = (props) => {
  return(
    <div className="nav">
      <p className='navp'>
        Weather-App
      </p>
      <form 
        onSubmit={props.getWeatherData}
        className='navf'
      >
        <input
          placeholder='Enter a city' 
          id="city-input" 
          className='navi'
        />
      </form>
    </div>
  );    
}

export default Navbar;