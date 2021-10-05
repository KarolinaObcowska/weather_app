import React from 'react'
import Forecast from './Forecast';
import Sunny from '../images/sunny.png'

const CurrentWeather = () => {
    return (
        <div className='flex flex-row justify-between items-center flex-wrap h-full w-full'>
            <div className='border-solid border-r-2 border-gray-300 w-60 h-60 m-3 px-3'>
            <small className='text-white font-sans font-thin tracking-wider'>Today</small>
                <p className=' break-normal inline-block text-white text-5xl oldstyle-nums'>10° C
                {' '}<img src={Sunny} alt="sun icon" className='w-14 inline-block -mt-2 ml-4'/>
                </p>
            </div>
            <Forecast />
        </div>
    )
}

export default CurrentWeather
