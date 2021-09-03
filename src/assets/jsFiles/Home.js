import React from 'react'
import EventTimer from '../jsSections/EventTimer'
import HomeHeader from '../jsSections/HomeHeader'
import Los from '../jsSections/Los'

function Home() {
    return (
        <div className="page">
            <HomeHeader/>
            <EventTimer/>
            <Los/>
        </div>
    )
}

export default Home
