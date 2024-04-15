import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className=' bg-background  py-3'>
      <Image className=' w-full  sm:h-auto  object-scale-down text-justify sm:object-fill py-4' src='/Photos.png' width={1200} height={1200} alt="banner" />
      <h1 className=' text-2xl   [word-spacing:5px]  px-5 sm:text-6xl leading-relaxed font-bold text-white'>
          Choose your City & Passion     
        <br></br>
         to explore communities:
      </h1>
    </div>
  )
}

export default Hero
