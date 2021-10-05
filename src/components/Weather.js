import React from 'react'
import CurrentWeather from './CurrentWeather'

const Weather = () => {
    return (
        <div className='bg-gray-400 inset-x-0 bottom-0 absolute opacity-90 w-screen h-2/5'>
            <CurrentWeather />
        </div>
    )
}

export default Weather
