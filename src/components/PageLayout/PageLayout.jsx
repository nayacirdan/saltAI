import React, { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import { inter } from '@/fonts'
import Croudsourcing from '@/components/Croudsourcing/Croudsourcing'
import Projects from '@/components/Projects/Projects'
import Background from '@/components/Background/Background'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Leaderboard from '@/components/Leaderboard/Leaderboard'

const PageLayout = () => {
    const [scrolled, setScrolled] = useState(false)
    const handleScroll = () => {
        if(!scrolled) setScrolled(true)
    }
    const handleWheelEvent = (event) => {
        event.preventDefault()
        handleScroll(event)
    }
    const scrollListener = () => {
        window.addEventListener('wheel', handleWheelEvent, { once: true, passive: true })
        return () => {
            window.removeEventListener('wheel', handleWheelEvent, { once: true, passive: true })
        }
    }

    useEffect(scrollListener, [])


    const ref = useRef(null)
    return (
      <div className={inter.className} style={{ overflowX:'hidden' }}>
        <Parallax pages={4}
          ref={ref}
          style={{
            width: '100vw',
            overflowX:'hidden',
            left:0,
            right:0 }} >
          <ParallaxLayer factor={1} offset={0} speed={-0.75}>
            <Background/>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={0} speed={0.5} >
            <Header/>
            <Hero scrolled={scrolled}/>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <Projects/>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.2}>
            <Croudsourcing/>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.5}>
            <Leaderboard/>
          </ParallaxLayer>
        </Parallax>
      </div>

    )
}

export default PageLayout
