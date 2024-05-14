import React from 'react'
import { stats } from '@/common/constants'
import styles from './Stats.module.scss'
import { clashGroteskSemibold } from '@/fonts'
import cs from 'classnames'
import { motion } from 'framer-motion'
import PT from 'prop-types'
const Stats = ({ scrolled }) => {
    const motionProps = scrolled ?
        {
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.9 },
        }
        : {}
    return (
      <motion.div className={styles.stats}
        {...motionProps}
        initial={{ opacity: 0, y: 100 }}
        >
        {stats.map(el => (
          <div className={styles.statElement} key={el.label}>
            <span className={cs(styles.statValue, clashGroteskSemibold.className)}>{el.value}</span>
            <span className={styles.statLabel}>{el.label}</span>
          </div>
            ))}
      </motion.div>
    )
}

Stats.propTypes = {
    scrolled: PT.bool,
}
Stats.defaultProps={
    scrolled: false,
}
export default Stats
