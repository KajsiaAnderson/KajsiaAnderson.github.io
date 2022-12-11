import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact_section}>
            <h1 className={styles.title}>Check out my stuff... </h1>
            <div className={styles.links}>
                <a href="https://www.linkedin.com/in/kajsiaanderson">linkedin</a>
                <p>||</p>
                <a href="https://github.com/KajsiaAnderson">github</a>
            </div>
        </div>
    )
}

export default Contact