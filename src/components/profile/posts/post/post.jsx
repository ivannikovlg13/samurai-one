import React from 'react'
import styles from './post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <div className={styles.wrapper}>
        <img src={props.img} alt="avatar" />
        <span>{props.message}</span>
      </div>
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post

