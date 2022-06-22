import React from 'react'
import MyPosts from './posts/posts';
import ProfileInfo from './profileinfo/profileinfo';
import s from './profile.module.css';

const Profile = () =>{
return(
  <div className = {s.profile}>
    <ProfileInfo />
    <MyPosts />
  </div>
  )
}

export default Profile
