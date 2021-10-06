import React from 'react'
import LocationInput from './components/LocationInput'
import Logo from './components/Logo'
import Weather from './components/Weather'
import UseFetchWeather from './hooks/UseFetchWeather';

const App = () => {
  const {data, error, loading, setUrl} = UseFetchWeather();
  const apiKey = '81c0716cd4ca4449afb153424210510'

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && loading) return <h2>Loading...</h2>
    if(!data) return null;
    return <Weather data={data} />
  }
  
  return (
    <div className="bg-hero bg-cover flex flex-col justify-center items-center w-screen h-screen">
      <Logo />
      <LocationInput handleForm={(location) => setUrl(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=yes&alerts=no`)}/>
      {getContent()}
    </div>
  )
}

export default App
