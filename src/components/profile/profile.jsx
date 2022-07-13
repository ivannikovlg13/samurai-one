import React from 'react'
import MyPosts from './posts/posts';
import ProfileInfo from './profileinfo/profileinfo';
import styles from './profile.module.css';

const Profile = (props) =>{
return(
  <div className = {styles.profile}>
    <ProfileInfo />
    <MyPosts postData={props.state.postData} newPostText={props.state.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
  </div>
  )
}

export default Profile
