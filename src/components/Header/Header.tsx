
import React from 'react'

import igniteLogo from '../../assets/Ignite-logo.svg'

import styles from './Header.module.css'


export function Header(){
    return (
        <div className={styles.header}>
            <img src={igniteLogo} alt="Iginte Logo" />
            <strong>Ignite Feed</strong>
        </div>
    )
}

