import React from 'react'
import Forecast from './Forecast'
import Sunny from '../images/sunny.png'

const CurrentWeather = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-4 h-full w-full">
      <div className="border-b-2 border-solid md:border-b-0 md:border-r-2 border-gray-300 m-3 px-3">
        <small className="text-white font-sans font-thin tracking-wider">
          Today
        </small>
        <p className="break-normal font-sans font-thin tracking-wider text-white text-5xl">
          10° C{' '}
          <img
            src={Sunny}
            alt="sun icon"
            className="w-14 inline-block -mt-2 ml-4"
          />
        </p>
      </div>
      <Forecast />
    </div>
  )
}

export default CurrentWeather
