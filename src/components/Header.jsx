import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    // Todo: add header //
    <header>
      <nav className={styles.nav}>
        <ul>
          <li><Link activeClass="active" smooth spy to="about">ABOUT</Link></li>
          <li><Link activeClass="active" smooth spy to="about">SKILLS</Link></li>
          <li><Link activeClass="active" smooth spy to="about">PROJECTS</Link></li>
          <li><Link activeClass="active" smooth spy to="about">CONTACT</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header