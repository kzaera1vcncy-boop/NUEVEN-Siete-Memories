import React from 'react'
import HeroNetflix from './_components/HeroNetflix'
import Members from './_components/members'
import Gallery from './_components/gallery'
import MusicPlayer from './_components/music_player'
import SocialFollow from './_components/SocialFollow'
import SchoolMap from './_components/SchoolMap'
import SuratKenangan from './_components/SuratKenangan'
import CountdownTimer from './_components/CountdownTimer'
import PolaroidWall from './_components/PolaroidWall'
import Kataterakhir from './_components/Kataterakhir'

const LandingPage = () => {
  return (
    <div className='min-h-[200vh]'>
      <HeroNetflix />

      <CountdownTimer />        {/* ← setelah hero */}

      <div className='max-con max-sm:px-5'>
        <section id="siswa">
          <Members />
        </section>

        <section id="kenangan">
          <Gallery />
        </section>

        <MusicPlayer />
      </div>

      <PolaroidWall />          {/* ← polaroid wall */}
      <Kataterakhir />          {/* ← kata terakhir */}
      <SuratKenangan />         {/* ← surat kenangan */}
      <SocialFollow />
      <SchoolMap />
      
    </div>
  )
}

export default LandingPage