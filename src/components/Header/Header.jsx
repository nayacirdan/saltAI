import React from 'react'
import styles from './Header.module.scss'
import { Button } from '@/ui-kit'
const Header = () => {
    return (
      <header className={styles.header}>
        <nav className={styles.buttonsContainer}>
          {/*Technically this is a button, better for screen readers, SEO,
            and in future we can add the possibility to click on it to navigate to the table section */}
          <Button className={styles.button} label='How It Works' linkTo='#how-it-works' size='small' variant='secondary' />
          <Button className={styles.button} label='Buy Salt AI' size='small' variant='primary' />
        </nav>

      </header>
    )
}

export default Header
