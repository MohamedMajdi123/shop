'use client'

import styles from './DarkModeToggle.module.css'
import { useContext } from 'react'
import { TheemContext } from '../context/ThemeContext';

export default function DarkModeToglle() {
    const [mode, toggle] = useContext(TheemContext);
    return (
        <div className={styles.container}  onClick={toggle}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌚</div>
            <div className={styles.switcher} style={mode === 'dark' ? {left: '2px'} : {right: '2px'}}/>
        </div>
    )
}