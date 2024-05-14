import React from 'react'
import Image from 'next/image'
import planet from '../../assets/planet.png'
import blueBlob from '../../assets/blueBlob.png'
import orangeBlob from '../../assets/orangeBlob.png'
import styles from './Background.module.scss'
const Background = () => {
    return (
      <div className={styles.container}>
        <Image alt='planet' className={styles.planet} height={1016} src={planet.src} width={1016}/>
        <Image alt='blueBlob' className = {styles.blueBlob} height={796} src={blueBlob.src} width={505}/>
        <Image alt='orangeBlob' className={styles.orangeBlob} height={796} src={orangeBlob.src} width={505}/>
      </div>
    )
}

export default Background
