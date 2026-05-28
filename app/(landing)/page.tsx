import React from 'react'
import Hero from './_components/hero'
import Members from './_components/members'
import Gallery from './_components/gallery'
import MusicPlayer from './_components/music_player'

const LandingPage = () => {
    return (
        <div className='min-h-[200vh] pt-20'>
            <div className='max-con max-sm:px-5'>
                <Hero />
                <Members />
                <Gallery />
                <h1 className='text-red-500 text-5xl'>
</h1>
                <MusicPlayer/>
            </div>
        </div>
    )
}

export default LandingPage
