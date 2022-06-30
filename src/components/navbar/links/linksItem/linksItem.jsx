import React from 'react';
import styles from '../links.module.css'
import { NavLink } from 'react-router-dom'

const LinksItem = (props) => {
  return (
      <div className={styles.item}>
        <NavLink className={(navData) => navData.isActive ? styles.active : ''} to={props.path}>{props.name}</NavLink>
      </div>

  )
}

export default LinksItem