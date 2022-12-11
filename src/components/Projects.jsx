import styles from './Projects.module.css'
import React from 'react'


const Projects = () => {
    return (
        <div>
            <h1 className={styles.title}>Projects</h1>
            <div className={styles.project}>
                <div className={styles.hike}>
                    <a href="https://vimeo.com/771884969" target="_blank" rel="noreferrer">
                        <img className={styles.project_image}
                            src="https://github.com/KajsiaAnderson/take-a-hike-capstone/blob/main/screenshots/take-a-hike.png?raw=true"
                            alt="take a hike project" />
                    </a>
                </div>
                <div className={styles.tic}>
                    <a href="https://main--capable-torrone-29e82b.netlify.app" target="_blank" rel="noreferrer">
                        <img className={styles.project_image}
                            src="https://github.com/KajsiaAnderson/tic-tac-toe/blob/main/tic-tac-toe.png?raw=true"
                            alt="tic-tac-toe" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects