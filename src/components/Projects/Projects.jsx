import React from 'react'
import styles from './Projects.module.scss'
import cs from 'classnames'
import { clashGroteskMedium } from '@/fonts'
import solana from '../../assets/solana.png'
import arweave from '../../assets/arweave.png'
import bittensor from '../../assets/bittensor.png'
import rndr from '../../assets/rndr.png'
import telegram from '../../assets/telegram.png'
import Image from 'next/image'
import pageStyles from '@/components/PageLayout/PageLayout.module.scss'
import { motion } from 'framer-motion'
const Projects = () => {
    const imagesBlockAnimation = {
        moved: {
            x: 0,
        },
        visible: {
            x:334-120,
            transition: { duration: 0.5 },
        },
    }
    return (
      <section className={styles.projects}>
        <div className={styles.container}>
          <div className={pageStyles.container}>
            <h2 className={cs(styles.heading, clashGroteskMedium.className)}>
              Projects integrated into the Arrakis AI Ecosystem
            </h2>
          </div>
          <motion.div className={styles.slider} initial='moved' variants={imagesBlockAnimation} whileInView='visible'>
            <Image className={styles.image} height={50} src={solana.src} width={334} />
            <Image className={styles.image} height={100} src={arweave.src} width={421} />
            <Image className={styles.image} height={58} src={bittensor.src} width={328}/>
            <Image className={styles.image} height={102} src={rndr.src} width={102}/>
            <Image className={styles.image} height={102} src={telegram.src} width={102}/>
            <Image className={styles.image} height={50} src={solana.src} width={334} />

          </motion.div>
        </div>

      </section>
    )
}

export default Projects
