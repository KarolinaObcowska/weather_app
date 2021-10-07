import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const LocationInput = ({ handleForm }) => {
  const [location, setLocation] = useState()

  return (
    <div className="relative md:top-12 mt-16 md:mt-0 ">
      <form onSubmit={handleForm(location)}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
          className="bg-gray-600 appearance-none border-2 border-gray-400 rounded w-full py-1 px-2 text-white leading-tight font-sans font-thin tracking-wider focus:outline-none focus:bg-grey-900 focus:border-grey-900"
        />
        <button type="submit" className="absolute top-2 right-2">
          <BsSearch className="text-white" />
        </button>
      </form>
    </div>
  )
}

export default LocationInput
