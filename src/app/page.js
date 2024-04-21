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



const Home = () => {
    const dispatch = useDispatch();
    const [data, setdata] = useState([]);
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

   

    const handleRedirect = (card) => {
        // console.log('redirect')
        router.push(`/desc/${card.id}`)
    }

    return (

        <>

        
        <div className=' bg-background '>
            <Hero />
            <div className=' px-8 sm:px-16'>
                <h2 className=' text-orange text-2xl my-6'>Select City :</h2>
                <div className=' flex gap-x-8'>
                    <CityImage cityName={"Jaipur"} img={"/jaipur.jpeg"} />
                    <CityImage cityName={"Mumbai"} img={"/mumbai.jpeg"} />
                </div>
            </div>
            <div className=' px-8 sm:px-16'>
                <h2 className='text-orange text-2xl my-6'>Select your Passion :</h2>
                <div className=' flex flex-wrap gap-4 '>
                    <button className=' flex gap-x-1 items-center px-5 py-2 border border-[#6255A5] rounded-full '>
                        <img src='/climb.svg' alt=''></img>
                        Outdoor
                    </button>
                    <button className=' flex gap-x-1 items-center px-5 py-2 border border-[#6255A5] rounded-full '>
                        <img src='/climb.svg' alt=''></img>
                        Wellness
                    </button>
                    <button className=' flex gap-x-1 items-center px-5 py-2 border border-[#6255A5] rounded-full '>
                        <img src='/climb.svg' alt=''></img>
                        Food
                    </button>
                </div>
            </div>
            <div className=' px-8  sm:px-16 mt-10 mb-7 '>
                <div className=' flex-wrap flex items-center gap-3'>
                    <h4 className=' font-semibold '>Showing communities in</h4>
                    <button className=' border-2 bg-[#C6C4EF] border-[#6255A5] rounded-full  text-black text-sm px-3 py-1 '>Jaipur</button>
                    <h4>For</h4>
                    <button className=' flex items-center gap-x-1 border-2 bg-[#C6C4EF] border-[#6255A5] rounded-full  text-black text-sm px-3 py-1 '> <img src='/climb.svg' alt=''></img> Outdoor</button>
                    <button className=' flex items-center gap-x-1 border-2 bg-[#C6C4EF] border-[#6255A5] rounded-full  text-black text-sm px-3 py-1 '> +1 more</button>
                </div>
            </div>
            <div className=' py-5 bg-background flex flex-wrap justify-center gap-x-3 gap-y-16'>
                {
                    data &&
                    data.map((card) => {
                        return <div key={card.id}  > <CommunityCard card={card} /> </div>
                    })
                }
            </div>
        </div>


        </>
    )
}

export default Home
