import React from 'react'
import Alert from './components/Alert'
import LocationInput from './components/LocationInput'
import Logo from './components/Logo'
import Spinner from './components/Spinner'
import Weather from './components/Weather'
import UseFetchWeather from './hooks/UseFetchWeather'

const App = () => {
  const { data, error, loading, setUrl } = UseFetchWeather()
  const apiKey = '81c0716cd4ca4449afb153424210510'

  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>
    if (!data && loading) return <Spinner />
    if (!data) return <Alert />
    return <Weather data={data} />
  }

  return (
    <div className="bg-hero bg-cover bg-fixed flex flex-col  justify-center h-screen items-center w-screen pb-10">
      <Logo />
      <LocationInput
        handleForm={(location) =>
          setUrl(
            `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=yes&alerts=no`
          )
        }
      />
      {getContent()}
    </div>
  )
}

export default App
