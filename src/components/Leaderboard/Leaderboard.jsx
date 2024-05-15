import React, { useState } from 'react'
import styles from './Leaderboard.module.scss'
import cs from 'classnames'
import pageStyles from '@/components/PageLayout/PageLayout.module.scss'
import { Button, Table } from '@/ui-kit'
import { tableData1, tableData2 } from '@/common/constants'
import { clashGroteskMedium } from '@/fonts'
import isEqual from 'lodash.isequal'
import Image from 'next/image'
import arrowButton from '../../assets/arrowButton.png'
const Leaderboard = () => {
    const [tableData, setTableData]=useState(tableData1)
    const handleClick = ()=>{
        if (isEqual(tableData, tableData1)) {
            setTableData(tableData2)
        } else {
            setTableData(tableData1)
        }
    }
    return (
      <section className={cs(styles.section, pageStyles.container)}>
        <div className={styles.sectionHeader}>
          <h2 className={cs(styles.heading, clashGroteskMedium.className)}>LLM Leaderboard</h2>
          <Button label='Submit your model' size='big'/>
        </div>
        <p className={styles.description}>
          We evaluate LLMs on key benchmarks using the Eleuther AI, a framework to test LLMs on a
          large number of different evaluation tasks.
          The higher the score, the better the LLM.
        </p>
        <Table tableData={tableData}/>
        <div className={styles.buttonContainer} onClick={handleClick}>
          {isEqual(tableData, tableData2) && <span>View full leaderboard</span> }
          <Image alt='arrowButton'
            className={cs(styles.arrowButton, { [styles.rotated]: isEqual(tableData, tableData2) })}
            height={56}
            src={arrowButton.src}
            width={56} />
        </div>
      </section>
    )
}

export default Leaderboard
