import React from 'react'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import Alert from './Alert'
const Weather = ({ data }) => {
  return (
    <>
      {data.current !== undefined ? (
        <div className="bg-gray-600 rounded-lg mt-16 opacity-70 h-full w-4/5 max-h-screen md:h-4/5">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-4 h-full w-full">
            <CurrentWeather current={data.current} />
            <Forecast forecast={data.forecast.forecastday} />
          </div>
        </div>
      ) : (
        <Alert />
      )}
    </>
  )
}

export default Weather
