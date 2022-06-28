import React from 'react';
import styles from './../dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={styles.dialog}>
      <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  )
}


export default DialogItem