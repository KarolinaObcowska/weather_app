import React from 'react'
import LocationInput from './components/LocationInput'
import Logo from './components/Logo'
import Weather from './components/Weather'
const App = () => {
  return (
    <div className="bg-hero bg-cover flex flex-col justify-center items-center w-screen h-screen">
      <Logo />
      <LocationInput />
      <Weather />
    </div>
  )
}

export default App
