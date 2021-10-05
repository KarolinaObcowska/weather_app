import React from 'react'
import Snowy from '../images/snowy.png'

const Forecast = () => {
  return (
    <div className="px-3 m-3">
      <small className="text-white font-sans font-thin tracking-wider">
        11.10.2021
      </small>
      <p className="break-normal font-sans font-thin tracking-wider text-white text-5xl">
        13°C{' '}
        <img
          src={Snowy}
          alt="sun icon"
          className="w-14 inline-block -mt-2 ml-4"
        />
      </p>
    </div>
  )
}

export default Forecast
