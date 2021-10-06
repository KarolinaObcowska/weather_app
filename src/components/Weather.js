import React from 'react'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'

const Weather = ({data}) => {
  return (
    <div className="bg-gray-600 rounded-lg mt-16 opacity-70 w-4/5 h-4/5">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-4 h-full w-full">
        {
          data.current !== undefined ? (
            <><CurrentWeather current={data.current} /><Forecast forecast={data.forecast} /></>
          ) : (
            'Enter valid location'
          )
        }
      </div>
    </div>
    
  )
}

export default Weather
