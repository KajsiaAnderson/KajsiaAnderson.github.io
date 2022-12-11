import React from 'react'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import styles from './FullPageScroll.module.css'
import logo from './KA-logo.png'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const FullPageScroll = () => {
    return (
        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection className={styles.intro}>
                    <img src={logo} alt='logo' />
                    <div>
                        <h1>Hi, I'm Kajsia.</h1>
                        <h2>I'm a full-stack web developer.</h2>
                    </div>
                </FullpageSection>
                <FullpageSection className={styles.section_black}>
                    <Skills />
                </FullpageSection>
                <FullpageSection className={styles.section}>
                    <Projects />
                </FullpageSection>
                <FullpageSection className={styles.section_black}>
                    <Contact />
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}

export default FullPageScroll