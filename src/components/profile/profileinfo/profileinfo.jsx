import React from 'react'
import styles from './profileinfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div className = {styles.background}>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-7FIBrGYI_cVpy3TBkc_pyNiBGkjc5V81Q&usqp=CAU' alt="bg" />
      </div>
      <div className={styles.item}>
        ava + discription
      </div>
    </div>

  )
}

export default ProfileInfo