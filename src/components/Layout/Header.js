import React, { Fragment } from 'react'
import styles from './Header.module.css'

import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <Fragment>
        <header className={styles.header}>
          <h1>ReactMeals</h1> 
     
          <HeaderCartButton/>  
        </header>
        <div className={styles['main-image']}>
          <img src={mealsImage} alt='table full of foods' />
        </div>  
    </Fragment>
  )
}

export default Header