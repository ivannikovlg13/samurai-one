import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './navbar.module.css'

const NavBar = () => {
  return (
    <nav className={s.navbar} >
      <div className={s.item}>
        <NavLink className = {(navData) => navData.isActive ? s.active : ''} to="/profile">Profile </NavLink>
      </div>
      <div className={s.item} >
        <NavLink className={(navData) => navData.isActive ? s.active : ''} to="/dialogs" >Messages</NavLink>
      </div>
      <div className={s.item} >
        <NavLink className={(navData) => navData.isActive ? s.active : ''} to="/news" style={({ isActive }) =>
          (isActive ? { color: 'gold' } : { color: 'white' })}>News</NavLink>
      </div>
      <div className={s.item} >
        <NavLink className={(navData) => navData.isActive ? s.active : ''}  to="/music" style={({ isActive }) =>
          (isActive ? { color: 'gold' } : { color: 'white' })}>Music</NavLink>
      </div>
      <div className={s.item} >
        <NavLink className={(navData) => navData.isActive ? s.active : ''} to="/settings" style={({ isActive }) =>
          (isActive ? { color: 'gold' } : { color: 'white' })}>Settings</NavLink>
      </div>
    </nav>
  )
}


export default NavBar

