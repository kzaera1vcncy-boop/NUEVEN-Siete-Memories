import React from 'react'
import HeroNetflix from './_components/HeroNetflix'
import Members from './_components/members'
import Gallery from './_components/gallery'
import SuratKenangan from './_components/SuratKenangan'
import MusicPlayer from './_components/music_player'
import SocialFollow from './_components/SocialFollow'
import SchoolMap from './_components/SchoolMap'

const LandingPage = () => {
    return (
        <div className='min-h-[200vh]'>
            <HeroNetflix />

            <div className='max-con max-sm:px-5'>
                <section id="siswa">
                    <Members />
                </section>

                <section id="kenangan">
                    <Gallery />
                </section>
                <SuratKenangan />

                <MusicPlayer />
            </div>

            <SocialFollow />
            <SchoolMap />
        </div>
    )
}

export default LandingPage