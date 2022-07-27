import React from 'react'
import styles from './users.module.css'

const Users = (props) => {
  return (
    props.users.map(user => <div className = {styles.wrapper}key={user.id}>
      <div className={styles.linksBox}>
        <img className ={styles.avatar} src={user.photo} alt="avatar" />
        {
        user.followed
         ? <button onClick={()=> {props.unfollow(user.id)}} className="button">Follow</button> 
         : <button onClick={() => {props.follow(user.id)}} className="button">Unfollow</button>
         }
        
      </div>
      <div className={styles.infoBox}>
        <div className ={styles.nameBox}>
          <span className={styles.name}>{user.fullName}</span>
          <span className={styles.status}>{user.status}</span>
        </div>
        <div className ={styles.locationBox}>
          <span>{user.location.country}</span>
          <span>{user.location.city}</span>
        </div>
      </div>
    </div>)
  )
}

export default Users