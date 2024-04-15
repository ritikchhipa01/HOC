import React from 'react'
import Hero from './components/layout/Hero'
import CommunityCard from './components/layout/CommunityCard'

const Home = () => {
    return (
        <div className=' '>
            <Hero />

            
            <div className=' py-5 bg-background flex flex-wrap justify-center gap-x-3 gap-y-16'>
            <CommunityCard/>
            <CommunityCard/>
            <CommunityCard/>
            <CommunityCard/>
            <CommunityCard/>
            <CommunityCard/>
            </div>
        </div>
    )
}

export default Home
