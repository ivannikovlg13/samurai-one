import React from 'react'
import MyPostsContainer from './posts/postsContainer';
import ProfileInfo from './profileinfo/profileinfo';
import styles from './profile.module.css';

const Profile = () =>{
return(
  <div className = {styles.profile}>
    <ProfileInfo />
    <MyPostsContainer/>
  </div>
  )
}

export default Profile
