/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from 'react'
import Hero from './components/layout/Hero'
import CommunityCard from './components/layout/CommunityCard'
import CityImage from './components/layout/CityImage'
import { useDispatch } from 'react-redux'
import { fetchDataFromFireStore } from './function/other'
import { addData } from './redux/slice'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const passion = [
    "Outdoor",
    "WellNess",
    "Sports",
    "Foods"
]



const Home = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');
    const [passions, setPassions] = useState([]);
    const [data, setdata] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDataFromFireStore();
            // console.log("data", data);
            dispatch(addData(data))

            setdata(data);

        }
        fetchData();
    }, []);



    console.log(passions);
    const handlePassion = (item) => {
        if (passions.includes(item)) {
            if (passions.indexOf(item) > -1) {
                passions.splice(passions.indexOf(item), 1);
                setPassions((prev) => [...prev])
            }
        }
        else {
            setPassions((prev) => [...prev, item]);
        }
    }

    return (
        <>
            <div className=' bg-background '>
                <Hero />
                <button onClick={() => setShowFilter(true)} className=' sm:hidden text-xl rounded-md  text-[#E7950E] px-4 py-2 mx-3 border border-[#E7950E]'>
                    Personalize for me
                </button>
                <div className='hidden sm:block px-8 sm:px-16'>
                    <h2 className=' text-orange text-2xl my-6'>Select City :</h2>
                    <div className=' flex gap-x-8'>
                        <CityImage cityName={"Jaipur"} img={"/jaipur.jpeg"} setCity={setCity} />
                        <CityImage cityName={"Mumbai"} img={"/mumbai.jpeg"} setCity={setCity} />
                    </div>
                </div>
                <div className=' hidden sm:block px-8 sm:px-16'>
                    <h2 className='text-orange text-2xl my-6'>Select your Passion :</h2>
                    <div className=' flex flex-wrap gap-4 '>
                        {
                            passion.map((item, index) => {
                                return (
                                    <button key={index}
                                        onClick={() => handlePassion(item)}
                                        className=' flex gap-x-1 items-center px-5 py-2 border border-[#6255A5] rounded-full '>
                                        <img src='/climb.svg' alt=''></img>
                                        {item}
                                    </button>
                                )
                            })

                        }
                    </div>
                </div>
                <div className=' hidden sm:block px-8  sm:px-16 mt-10 mb-7 '>
                    <div className=' flex-wrap flex items-center gap-3'>
                        <h4 className=' font-semibold '>Showing communities in</h4>
                        <button className=' border-2 bg-[#C6C4EF] border-[#6255A5] rounded-full  text-black text-sm px-3 py-1 '>{city ? city : "All cities"}</button>
                        <h4>For</h4>
                        {
                            passions &&
                            passions.map((item, index) => {
                                return (
                                    <button key={index} className=' flex items-center gap-x-1 border-2 bg-[#C6C4EF] border-[#6255A5] rounded-full  text-black text-sm px-3 py-1 '> <img src='/climb.svg' alt=''></img> {item}</button>
                                )
                            })
                        }
                        <button className=' flex items-center gap-x-1 border-2 bg-[#C6C4EF] border-[#6255A5] rounded-full  text-black text-sm px-3 py-1 '> +1 more</button>
                    </div>
                </div>
                <div className=' py-5 bg-background flex flex-wrap justify-center gap-x-3 gap-y-16'>
                    {
                        data && !city &&
                        data.map((card) => {
                            return <div key={card.id} > <CommunityCard card={card} /> </div>
                        })
                    }
                    {
                        data && city &&
                        data.filter((card) => { return card.cityName == city }).map((card) => {
                            return <div key={card.id} > <CommunityCard card={card} /> </div>
                        })
                    }
                </div>
            </div>


            {/*  Mobile View */}

            <div id="drawer-bottom-example" className={`${showFilter  ? "block" : "hidden"} sm:hidden fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 transform-none`} tabindex="-1" aria-labelledby="drawer-bottom-label">
                <h5 id="drawer-bottom-label" className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"><svg class="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>Filter</h5>
                <button type="button" onClick={() => setShowFilter(false)} data-drawer-hide="drawer-bottom-example" aria-controls="drawer-bottom-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span class="sr-only">Close menu</span>
                </button>
                
                <div className=' px-8 sm:px-16'>
                    <h2 className=' text-orange text-2xl my-6'>Select City :</h2>
                    <div className=' flex gap-x-8'>
                        <CityImage cityName={"Jaipur"} img={"/jaipur.jpeg"} setCity={setCity} />
                        <CityImage cityName={"Mumbai"} img={"/mumbai.jpeg"} setCity={setCity} />
                    </div>
                </div>
                <div className='  px-8 sm:px-16'>
                    <h2 className='text-orange text-2xl my-6'>Select your Passion :</h2>
                    <div className=' flex flex-wrap gap-4 '>
                        {
                            passion.map((item, index) => {
                                return (
                                    <button key={index}
                                        onClick={() => handlePassion(item)}
                                        className=' flex gap-x-1 items-center px-5 py-2 border border-[#6255A5] rounded-full '>
                                        <img src='/climb.svg' alt=''></img>
                                        {item}
                                    </button>
                                )
                            })

                        }
                    </div>
                </div>
                <div className='  px-8  sm:px-16 mt-10 mb-7 '>
                    <div className=' flex-wrap flex items-center gap-3'>
                        <h4 className=' font-semibold '>Showing communities in</h4>
                        <button className=' border-2 bg-[#C6C4EF] border-[#6255A5] rounded-full  text-black text-sm px-3 py-1 '>{city ? city : "All cities"}</button>
                        <h4>For</h4>
                        {
                            passions &&
                            passions.map((item, index) => {
                                return (
                                    <button key={index} className=' flex items-center gap-x-1 border-2 bg-[#C6C4EF] border-[#6255A5] rounded-full  text-black text-sm px-3 py-1 '> <img src='/climb.svg' alt=''></img> {item}</button>
                                )
                            })
                        }
                        <button className=' flex items-center gap-x-1 border-2 bg-[#C6C4EF] border-[#6255A5] rounded-full  text-black text-sm px-3 py-1 '> +1 more</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home


