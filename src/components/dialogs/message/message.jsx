import React from 'react';
import styles from './../dialogs.module.css'

const Message = (props) => {
  return (
    <div className={styles.message}>
      <img className={styles.icon} src={props.icon} alt="icon" />
      <span>{props.message}</span> 
    </div>
  )
}

export default Message