'use client'

import React from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.scss'
import { Button } from '@/ui-kit'
import cs from 'classnames'
import { clashGroteskMedium } from '@/fonts'
import Stats from '@/components/Hero/Stats/Stats'
import PT from 'prop-types'
import pageStyles from '../PageLayout/PageLayout.module.scss'

const Hero = ({ scrolled }) => {
    const motionProps = scrolled?
        {
            animate: { y: 0 },
            transition: { duration: 0.5 },
        }
        :{}

    return (
      <section className={cs(styles.hero, { [styles.scrolled]: scrolled }, pageStyles.container)}>
        <motion.div className={styles.container}
          initial={{ y:100 }}
          {...motionProps}
          transition={{ duration: 0.2 }}>
          <motion.h1 animate={{
                         background: scrolled
                             ? 'linear-gradient(135deg, #FFD6F9 0%, #FFCBB4 50%, #FFBEC3 100%)'
                             :  'linear-gradient(135deg, #963488 0%, #FC6F32 50%, #FF4A59 100%)',
                         '-webkit-background-clip': 'text',
                         '-webkit-text-fill-color': 'transparent',
                         fontSize: scrolled? '125.01px' : '128px',
                         lineHeight: scrolled? '125.01px': '128px',
          }}
            className={cs(styles.heading, clashGroteskMedium.className)}
            initial={false}
            transition={{ duration: 0.8 }}>
            A new economic primitive for funding decentralized AI
          </motion.h1>
          <p className={styles.description}>
            We track, rank, and pay for the best open-source decentralized LLMs to compete against OpenAI
          </p>
          <div
            className={styles.buttons}>
            <Button className={styles.button} label='Buy Salt AI' size='big' variant='primary'/>
            <Button className={styles.button} label='Try now' linkTo='#how-it-works' size='big' variant='secondary'/>
          </div>
        </motion.div>
        <Stats scrolled={scrolled}/>

      </section>
    )
}

Hero.propTypes = {
    scrolled: PT.bool,
}
Hero.defaultProps = {
    scrolled: false,
}

export default Hero
