import React from 'react'
import Trends from '../components/content/Trends'
import Interests from '../components/content/Interests'
import Trio from '../components/content/Trio'
import HeroSection from '../components/content/HeroSection'
import SkeletonLoader from 'components/SkeletonLoader'
function ContentPage() {
   
    return (
        <>
            <HeroSection />
            <Trio />
            <div className='container wrapper'>

                <div className='flex flex-row flex-wrap'>
                    <Trends />
                    <Interests />
                </div>
            </div>
        </>
    )
}

export default ContentPage