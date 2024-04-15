import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CommunityCard = () => {
    return (
        <Link href={'/desc'}>
        <div className={` flex items-center w-[460px] h-[700px] relative   object-fill `}>
            <img className='   w-full h-full  rounded-xl' src='/pranay.png' width={100} height={100} alt='community Image'></img>

            <div className='flex  w-[94%]  mx-[3%] p-4 gap-x-2    items-start  text-white rounded-[30px]  absolute z-10 bottom-8   bg-black/70 '>
                <img className=' w-10 h-10  sm:w-16 sm:h-16' src='/clogo.png' width={100} height={100} alt=''></img>
                <div className=' flex w-full flex-col '>
                    <div className=' flex  flex-1 justify-between'>
                        <h2 className='  sm:text-xl font-semibold'>Jaipur Trekkers Community</h2>
                        <img className='  w-4 h-4 mt-2' src='/Share.svg' alt='img'></img>
                    </div>
                    <div className=' flex flex-wrap gap-x-3 gap-y-1 mt-1'>
                        <p className=' bg-black/60 text-sm rounded-full px-[10px] py-1 '>Hiking</p>
                        <p className=' bg-black/60 text-sm rounded-full px-[10px] py-1 '>Hiking</p>
                        <p className=' bg-black/60 text-sm rounded-full px-[10px] py-1 '>Hiking</p>
                        <p className=' bg-black/60 text-sm rounded-full px-[10px] py-1 '>Wellness</p>
                        <p className=' bg-black/60 text-sm rounded-full px-[10px] py-1 '>Resources</p>
                    </div>
                    <div className=' mt-2 flex flex-1 justify-between'>
                        <p className=' text-sm sm:text-[16px]'>
                            Builders: Pranay & Ujjwal
                        </p>
                        <button className=' text-xs sm:text-sm px-2 sm:px-4 py-1 rounded-full bg-[#E7950E] text-white '>
                            Explore Now
                        </button>
                    </div>
                    <div className=' mr-2 mt-2   flex  flex-1 gap-x-1 items-center justify-end'>
                        Join Now
                        <img src='/arrow-right.svg' alt=''></img>
                    </div>
                </div>


                {/* <button>Join Now </button> */}

            </div>

        </div>
        </Link>
    )
}

export default CommunityCard
