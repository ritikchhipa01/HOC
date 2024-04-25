
import React from 'react'

const CityImage = ({ cityName, img, setCity }) => {
  return (
    <div className=' relative ' onClick={() => setCity(cityName)}>
      <img className=' w-[109px] h-[109px] sm:w-[244px] sm:h-[244px] rounded-2xl sm:rounded-3xl  object-cover' src='/jaipur.jpeg' alt=''></img>
      <p className='  text-lg  sm:text-3xl text-white font-semibold absolute top-1 left-2 sm:top-3 sm:left-5'>{cityName}</p>
    </div>
  )
}

export default CityImage
