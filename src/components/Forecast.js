import React from 'react'

const Forecast = ({ forecast }) => {
  return (
    <div className="px-3 m-3">
      {forecast.map((data) => (
        <>
          <p className="text-white font-sans font-thin tracking-wider text-xl mt-5">
            {data.date}
            <img
              src={data.day.condition.icon}
              alt="sun icon"
              className="w-11 inline-block -mt-2 ml-4"
            />
          </p>
          <p className="break-normal font-sans font-thin tracking-wider text-white text-sm">
            {data.day.condition.text}
          </p>
          <div className="mt-3 grid grid-cols-1  md:grid-cols-2 gap-4 ">
            <div>
              <p className="break-normal font-sans font-thin tracking-wider text-white text-sm">
                Avg. Temp: {data.day.avgtemp_c}°C{' '}
              </p>
              <p className="break-normal font-sans font-thin tracking-wider text-white text-sm">
                Humidity: {data.day.avghumidity} %
              </p>
              <p className="break-normal font-sans font-thin tracking-wider text-white text-sm">
                Chance of rain: {data.day.daily_chance_of_rain} %
              </p>
            </div>
            <div>
              <p className="break-normal font-sans font-thin tracking-wider text-white text-sm">
                Sunrise: {data.astro.sunrise.substring(0, 5)}
              </p>
              <p className="break-normal font-sans font-thin tracking-wider text-white text-sm">
                Sunshine: {data.astro.sunset.substring(0, 5)}
              </p>
              <p className="break-normal font-sans font-thin tracking-wider text-white text-sm">
                Moon: {data.astro.moon_phase}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default Forecast
