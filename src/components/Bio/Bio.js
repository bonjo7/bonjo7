import React from 'react'
import Contact from '../Contact/Contact'
import styles from './Bio.module.css'
import logo from '../../images/prime.png'
import Table from '../table/Table'
import { FeatureFlag } from '../../Hooks/FeatureFlags'

const email = 'bernardthompson83@gmail.com'
const tel = '+353 87 137 7303'

const Bio = () => {
  const { flags } = FeatureFlag()
  return (
    <>
      <div className={styles.wrapper} role='main' id='landing-page'>
        <img
          src={logo}
          className={styles.AppLogo}
          alt='bernard_thompson_profile_picture'
        />
        <h1 className={styles.name}>Bernard Thompson</h1>
        <hr className={styles.hr}></hr>
        <p className={styles.title}>Software Developer</p>
        {flags?.paragraph_feature?.enabled && (
          <p>{`hello feature ${flags?.paragraph_feature?.value}`}</p>
        )}
      </div>
      <Contact email={email} tel={tel} />
      {flags?.movie_table?.enabled && (
        <Table version={flags?.movie_table?.value} />
      )}
    </>
  )
}

export default Bio
