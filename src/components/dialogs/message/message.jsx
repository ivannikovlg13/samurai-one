import React from 'react';
import styles from './../dialogs.module.css'

const Message = (props) => {
  return (
    <li className={styles.message}>
      <img className={styles.icon} src={props.icon} alt="icon" />
      <span>{props.message}</span>
    </li>
  )
}

export default Message