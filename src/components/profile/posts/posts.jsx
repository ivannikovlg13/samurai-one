import React from 'react'
import Post from './post/post';
import s from './posts.module.css';

const MyPosts = () => {
  return (
    <div className = {s.posts}>
    <Post message='How are you?' likesCount='10'/>
    <Post message='Iam Okey !' likesCount ='20'/>
    </div>
    )
}

export default MyPosts

