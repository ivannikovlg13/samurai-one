import React from 'react'
import s from './navbar.module.css'

export const NavBar = () => {
  return(
    <nav className = {s.navbar} >
      <div className = {`${s.item} ${s.active}`} >
        <a>Profile</a>
      </div>
      <div className = {s.item} >
        <a>Messages</a>
      </div>
      <div className = {s.item} >
        <a>News</a>
      </div>
      <div className = {s.item} >
        <a>Music</a>
      </div>
      <div className = {s.item} >
        <a>Settings</a>
      </div>
    </nav>
    )
}

