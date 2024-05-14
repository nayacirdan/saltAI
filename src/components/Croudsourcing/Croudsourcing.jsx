import React  from 'react'
import cs from 'classnames'
import styles from './Croudsourcing.module.scss'
import { clashGroteskMedium, inter } from '@/fonts'
import { Button } from '@/ui-kit'
import pageStyles from '@/components/PageLayout/PageLayout.module.scss'
import Commet from '@/components/Croudsourcing/Commet'

const Croudsourcing = () => {
    return (
      <>
        <section className={cs(styles.section, pageStyles.container)} id='how-it-works'>
          <div className={styles.leftContainer}>
            <h2 className={cs(styles.heading, clashGroteskMedium.className)}>
              Crowdsourcing our collective intelligence to build the best AI
            </h2>
            <p className={cs(styles.description, inter.className)}>
              Open source AI has been lagging behind the likes of Google and OpenAI by billions of dollars.
            </p>
            <p className={cs(styles.description, inter.className)}>
              Salt aims to solve that by rewarding open source developers who contribute to the
              democratization
              of
              AI. We run competitions between AI models to find and reward the best AI models. As a result,
              our
              users will be able to access the latest cutting edge AI models.
            </p>
            <Button className={styles.button} label='Use the cutting edge AI' size='big'/>
          </div>
          <Commet/>
        </section>
      </>
    )

}

export default Croudsourcing
