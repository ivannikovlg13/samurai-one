import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navbar} >
      <div className={styles.item}>
        <NavLink className = {(navData) => navData.isActive ? styles.active : ''} to="/profile">Profile </NavLink>
      </div>
      <div className={styles.item} >
        <NavLink className={(navData) => navData.isActive ? styles.active : ''} to="/dialogs" >Messages</NavLink>
      </div>
      <div className={styles.item} >
        <NavLink className={(navData) => navData.isActive ? styles.active : ''} to="/news">News</NavLink>
      </div>
      <div className={styles.item} >
        <NavLink className={(navData) => navData.isActive ? styles.active : ''}  to="/music">Music</NavLink>
      </div>
      <div className={styles.item} >
        <NavLink className={(navData) => navData.isActive ? styles.active : ''} to="/settings">Settings</NavLink>
      </div>
    </nav>
  )
}


export default NavBar

