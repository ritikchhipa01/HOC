import Link from 'next/link'
import React from 'react'

const CommunityCard = ({ card }) => {
    // console.log("card data", card.image1.split('&')[0]);
    // console.log("card data", card.CommunityName);
    return (
        <>
            <div className={` flex items-center w-[95%] h-auto mx-auto sm:w-[460px] sm:h-[700px] relative   object-fill `}>
                <img className='   w-full h-full  rounded-xl' src={card.image2.split('&')[0]} width={100} height={100} alt='community Image'></img>
                <div className='flex  w-[94%]  mx-[3%] p-4 gap-x-2    items-start  text-white rounded-[30px]  absolute z-10 bottom-8   bg-black/70 '>
                    <img className=' w-10 h-10  sm:w-16 sm:h-16' src={card.image1.split('&')[0]} width={100} height={100} alt=''></img>
                    <div className=' flex w-full flex-col '>
                        <div className=' flex  flex-1 justify-between'>
                            <h2 className='  sm:text-xl font-semibold'>{card.CommunityName}</h2>
                            <img className='  w-4 h-4 mt-2' src='/Share.svg' alt='img'></img>
                        </div>
                        <div className=' flex flex-wrap gap-x-3 gap-y-1 mt-1'>
                            {card &&
                                card.tags.map((tag, index) => {
                                    return (
                                        <p key={index} className=' bg-black/60 text-sm rounded-full px-[10px] py-1 '>{tag.toUpperCase()}</p>
                                    )
                                })}
                        </div>
                        <div className=' mt-2 flex flex-1 justify-between'>
                            <p className=' text-sm sm:text-[16px]'>
                                Builders: {card.builder.join(' &').toUpperCase()}
                            </p>
                            <Link href={`/desc/${card.id}`} className=' text-xs sm:text-sm px-2 sm:px-4 py-1 rounded-full bg-[#E7950E] text-white '>
                                Explore Now
                            </Link>
                        </div>
                        <div className=' mr-2 mt-2   flex  flex-1 gap-x-1 items-center justify-end cursor-pointer' onClick={() => document.getElementById('my_modal_3').showModal()}>
                            Join Now
                            <img src='/arrow-right.svg' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_3" className="modal    bg-black/80">
                    <div className="modal-box bg-white max-w-[90%] sm:w-[400px] rounded-badge">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">✕</button>
                        </form>
                        <img className="w-16 h-16 my-3 object-fill mx-auto" src={card.image1.split('&')[0]} alt="logo community"></img>
                    <p className="py-4 text-3xl  text-black text-center font-semibold">{card.CommunityName}</p>

                        <form className="  px-6">
                            <div className="  flex flex-col  mx-auto ">
                                <label htmlFor="email" className="block text-sm font-medium leading-5  text-[#606367]">Your Name</label>
                                <div className="mt-1  relative rounded-md shadow-sm">
                                    <input id="name" name="name" placeholder="" type="text" required className=" bg-transparent  w-full block   px-3 py-2 border border-black rounded-full  focus:outline-none  transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>
                            <div className=" mt-5  flex flex-col  mx-auto ">
                                <label htmlFor="email" className="block text-sm font-medium leading-5  text-[#606367">Your phone</label>
                                <div className="mt-1  relative rounded-md shadow-sm">
                                    <input id="name" name="name" placeholder="" type="text" required className=" bg-transparent  w-full block   px-3 py-2 border border-black rounded-full  focus:outline-none  transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                                </div>
                            </div>
                            <div className=" flex justify-center">
                                <Link href={`/desc/${card.id}`} className="  bg-[#414141]  px-4 py-2 rounded-full text-white shadow-xl shadow-black/40 mt-4 cursor-pointer" >
                                    Join Now
                                </Link>
                            </div>
                        </form>
                        <p className=" mt-4 text-xs text-[#606367] text-center">You will be redirected to join their community group</p>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default CommunityCard
