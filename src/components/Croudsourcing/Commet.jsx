import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import styles from '@/components/Croudsourcing/Croudsourcing.module.scss'

const Commet = () => {
    const animation = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref)

    useEffect(() => {
        if (inView) {
            animation.start('visible')
        } else {
            animation.start('hidden')
        }
    }, [animation, inView])
    const variants = {
        hidden: {
            top: 'calc(100vh / 3)',
            opacity: 1,
            rotate: 13,
        },
        visible: {
            top: '100vh',
            left: 'calc(100vh * 3.73205080756888) ',
            opacity: 0,
            rotate: 13,
            transition: { duration: 1.5, delay: 0.2 },
        },
    }

    return (
      <motion.div
        animate={animation}
        className={styles.commet}
        initial='hidden'
        ref={ref}
        variants={variants}
        />
    )
}

export default Commet
