import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className=' bg-background min-h-screen py-3'>
      <Image className=' w-full h-[380] sm:h-auto  object-scale-down text-justify sm:object-fill py-4' src='/Photos.png' width={1200} height={1200} alt="banner" />
      <h1 className=' text-2xl  px-5 sm:text-6xl leading-relaxed font-bold text-white'>

        <Link href={`/pages/desc`}>
          Choose your City & Passion
        </Link>
        <br></br> to explore communities:
      </h1>
    </div>
  )
}

export default Hero
