import React from 'react'
import MyPostsContainer from './posts/postsContainer';
import ProfileInfo from './profileinfo/profileinfo';
import styles from './profile.module.css';

const Profile = (props) =>{
return(
  <div className = {styles.profile}>
    <ProfileInfo />
    <MyPostsContainer store={props.store} />
  </div>
  )
}

export default Profile
