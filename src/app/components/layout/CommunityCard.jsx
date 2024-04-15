import Image from 'next/image'
import React from 'react'

const CommunityCard = () => {
    return (
        <div className={` flex items-center w-[460px] h-[700px] relative   object-fill `}>
            <img className='   w-full h-full  rounded-xl' src='/pranay.png' alt='community Image'></img>

            <div className='flex  w-[94%]  mx-[3%] p-4 gap-x-2    items-start  text-white rounded-[30px]  absolute z-10 bottom-8   bg-black/70 '>
                <img className=' w-16 h-16' src='clogo.png' alt=''></img>
                <div className=' flex w-full flex-col '>
                    <div className=' flex  flex-1 justify-between'>
                        <h2 className=' text-xl font-semibold'>Jaipur Trekkers Community</h2>
                        <img className='  w-4 h-4 mt-2' src='/Share.svg' alt='img'></img>
                    </div>
                    <div className=' flex space-x-3'>
                        <p className=' '>Hiking</p>
                        <p>Wellness</p>
                        <p>Resources</p>
                    </div>
                    <div className=' flex flex-1 justify-between'>
                        <p>
                            Builders: Pranay & Ujjwal
                        </p>
                        <button className=' text-sm px-4 py-1 rounded-full bg-[#E7950E] text-white '>
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
    )
}

export default CommunityCard
