import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../friends.module.css'

const FriendItem = (props) => {
  return (
    <div className={styles.friendItem}><NavLink to="/friend"><img src={props.img} alt="user-avatar" /></NavLink></div>
  )
}

export default FriendItem