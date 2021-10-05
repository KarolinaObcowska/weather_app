import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
const LocationInput = () => {
  const [location, setLocation] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    console.log(`submitted ${location}`)
    setLocation('')
  }
  return (
    <div className="relative top-12">
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={
            'bg-gray-600 appearance-none border-2 border-gray-400 rounded w-full py-1 px-2 text-white leading-tight font-sans font-thin tracking-wider focus:outline-none focus:bg-grey-900 focus:border-grey-900'
          }
        />
        <button type="submit" className="absolute top-2 right-2">
          <BsSearch className="text-white" />
        </button>
      </form>
    </div>
  )
}

export default LocationInput
