import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <div className={styles.contact_section}>
            <div className={styles.links}>
                <h1 className={styles.title}> Check out my stuff at
                    <a href="https://www.linkedin.com/in/kajsiaanderson"> linkedin</a> or
                    <a href="https://github.com/KajsiaAnderson"> github</a>.
                </h1>
            </div>
        </div>
    )
}

export default Contact