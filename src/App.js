import React from 'react'
import Logo from './components/Logo'
import Weather from './components/Weather'
const App = () => {
  return (
    <div className='bg-hero bg-cover relative w-screen h-screen'>
      <Logo />
      <Weather />
    </div>
  )
}

export default App
