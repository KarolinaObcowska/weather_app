import React from 'react'
import Water from '../images/water.png'
import Wind from '../images/wind.png'
import WidnDir from '../images/wind-vane.png'
import Pressure from '../images/pressure.png'
import AirQuality from '../images/air-quality.png'

const CurrentWeather = ({ current }) => {
  console.log(current)
  return (
    <div className="border-b-2 border-solid md:border-b-0 md:border-r-2 border-gray-300 m-3 px-3">
      <p className="break-normal font-sans font-thin tracking-wider text-white text-7xl">
        {current.temp_c}°C
        <img
          src={current.condition.icon}
          alt="sun icon"
          className="w-20 inline-block -mt-2 ml-4"
        />
      </p>
      <p className="break-normal font-sans font-thin tracking-wider text-white text-2xl">
        {current.condition.text}
      </p>
      <p className="break-normal font-sans font-thin mt-5 tracking-wider text-white text-md">
        <img src={Water} alt="sun icon" className="w-4 inline-block -mt-2" />{' '}
        Humidity: {current.humidity} %
      </p>
      <p className="break-normal font-sans font-thin tracking-wider text-white text-md">
        <img src={Wind} alt="sun icon" className="w-4 inline-block -mt-2" />{' '}
        Wind: {current.wind_kph} km/h
      </p>
      <p className="break-normal font-sans font-thin tracking-wider text-white text-md">
        <img src={WidnDir} alt="sun icon" className="w-4 inline-block -mt-2" />{' '}
        Wind direction: {current.wind_dir}
      </p>
      <p className="break-normal font-sans font-thin tracking-wider text-white text-md">
        <img src={Pressure} alt="sun icon" className="w-4 inline-block -mt-2" />{' '}
        Pressure: {current.pressure_mb} Mb
      </p>
      <h2 className="break-normal font-sans font-thin tracking-wider my-5 text-white text-xl">
        <img
          src={AirQuality}
          alt="sun icon"
          className="w-4 inline-block -mt-2"
        />{' '}
        Air Quality
      </h2>
      <p className="ml-4 break-normal font-sans font-thin tracking-wider text-white text-md">
        CO: {Math.round(current.air_quality.co * 100) / 100}
      </p>
      <p className="ml-4 break-normal font-sans font-thin tracking-wider text-white text-md">
        NO2: {Math.round(current.air_quality.no2 * 100) / 100}
      </p>
      <p className="ml-4 break-normal font-sans font-thin tracking-wider text-white text-md">
        O3: {Math.round(current.air_quality.o3 * 100) / 100}
      </p>
      <p className="ml-4 break-normal font-sans font-thin tracking-wider text-white text-md">
        SO2: {Math.round(current.air_quality.so2 * 100) / 100}
      </p>
    </div>
  )
}

export default CurrentWeather
