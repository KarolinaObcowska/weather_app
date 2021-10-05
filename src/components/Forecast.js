import React from 'react'
import Snowy from '../images/snowy.png'
import Rainy from '../images/rainy.png'
import Cloudy from '../images/cloudy.png'
const Forecast = () => {
    return (
        <>
            <div className=' w-60 h-60 px-3 m-3 border-solid border-r-2 border-gray-300'>
            <small className='text-white font-sans font-thin tracking-wider'>11.10.2021</small>
                <p className='break-normal font-sans font-thin tracking-wider text-white text-5xl oldstyle-nums'>13°C
                {' '}<img src={Snowy} alt="sun icon" className='w-14 inline-block -mt-2 ml-4'/>
                </p>
            </div>
            <div className=' w-60 h-60 px-3 m-3 border-solid border-r-2 border-gray-300'>
                <small className='text-white font-sans font-thin tracking-wider'>12.10.2021</small>
                <p className='break-normal font-sans font-thin tracking-wider text-white text-5xl oldstyle-nums'>-9°C
                {' '}<img src={Rainy} alt="sun icon" className='w-14 inline-block -mt-2 ml-4'/>
                </p>
            </div>
            <div className='w-60 h-60 px-3 m-3'>
            <small className='text-white font-sans font-thin tracking-wider'>13.10.2021</small>
                <p className='break-normal font-sans font-thin tracking-wider text-white text-5xl oldstyle-nums'>17°C
                {' '}<img src={Cloudy} alt="sun icon" className='w-14 inline-block -mt-2 ml-4'/>
                </p>
            </div>
      
        </>
    )
}

export default Forecast
