import React from 'react';
import FriendItem from './friendItem/friendItem';
import styles from './friends.module.css'

const Friends = (props) => {
  let friendElements = props.friends.map((img, i) => <FriendItem key={i} img={img.userAvatar}/>)
  return (
    <div className={styles.friendsWrapper}>
      <h1 className={styles.title}>Friends</h1>
      <div className={styles.friendItems}>
        {friendElements}
      </div>
    </div>
  )
}

export default Friends