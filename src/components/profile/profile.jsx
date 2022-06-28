import React from 'react'
import MyPosts from './posts/posts';
import ProfileInfo from './profileinfo/profileinfo';
import styles from './profile.module.css';

const Profile = (props) =>{
return(
  <div className = {styles.profile}>
    <ProfileInfo />
    <MyPosts postData = {props.postData}/>
  </div>
  )
}

export default Profile
