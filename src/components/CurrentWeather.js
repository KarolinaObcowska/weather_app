import React from 'react'

const CurrentWeather = ({ current }) => {
  console.log(current)
  return (
    <div className="border-b-2 border-solid md:border-b-0 md:border-r-2 border-gray-300 m-3 px-3">
      <small className="text-white font-sans font-thin tracking-wider">
        Today
      </small>
      <p className="break-normal font-sans font-thin tracking-wider text-white text-5xl">
        {current.temp_c}°C{' '}
        <img
          src={current.condition.icon}
          alt="sun icon"
          className="w-14 inline-block -mt-2 ml-4"
        />
      </p>
      <p className='break-normal font-sans font-thin tracking-wider text-white text-md'>{current.condition.text}</p>
      <p className='break-normal font-sans font-thin tracking-wider text-white text-md'>{current.humidity}</p>
    </div>
  )
}

export default CurrentWeather
