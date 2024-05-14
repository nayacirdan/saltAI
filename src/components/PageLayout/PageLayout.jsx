import React, { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import { inter } from '@/fonts'
import Croudsourcing from '@/components/Croudsourcing/Croudsourcing'
import Projects from '@/components/Projects/Projects'
import Background from '@/components/Background/Background'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

const PageLayout = () => {
    const [scrolled, setScrolled] = useState(false)
    const scrollListener = () => {
        const handleScroll = () => {
           if(!scrolled) setScrolled(true)
        }
        const handleWheelEvent = (event) => {
            event.preventDefault()
            handleScroll(event)
        }
        window.addEventListener('wheel', handleWheelEvent, { once: true, passive: true })
        return () => {
            window.removeEventListener('wheel', handleWheelEvent, {once: true, passive: true })
        }
    }

        useEffect(scrollListener, [])


    const ref = useRef(null)
    return (
      <div className={inter.className} style={{ overflowX:'hidden' }}>
        <Parallax pages={3}
          ref={ref}
          style={{
            width: '100vw',
            overflowX:'hidden',
            left:0,
            right:0 }} >
          <ParallaxLayer factor={2} offset={0} speed={-0.9}>
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
        </Parallax>
      </div>

    )
}

export default PageLayout
