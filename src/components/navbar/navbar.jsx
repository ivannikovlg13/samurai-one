import React from 'react'
import Friends from './friends/friends'
import Links from './links/links'
import styles from './navbar.module.css'

const NavBar = (props) => {
  return (
    <nav className={styles.navWrapper}>
      <Links links={props.state.links}/>
      <Friends friends={props.state.friends}/>
    </nav>

  )
}


export default NavBar

