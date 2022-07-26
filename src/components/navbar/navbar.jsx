import React from 'react'
import FriendsContainer from './friends/friendContainer'
import LinksContainer from './links/linksContainer'
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navWrapper}>
      <LinksContainer/>
      <FriendsContainer/>
    </nav>

  )
}


export default NavBar

