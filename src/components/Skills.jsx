import React from 'react'
import styles from './Skills.module.css'

const Skills = () => {
    return (
        <section className={styles.skill_section}>
            <h1 className={styles.title}>Skills</h1>
            <div className={styles.react_icons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="nodeJS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" alt="vscode" />
            </div>
            <div className={styles.react_icons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" alt="postgresql" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JS" />
            </div>
            <div className={styles.react_icons}>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="css" />
            </div>
        </section>
    )
}

export default Skills