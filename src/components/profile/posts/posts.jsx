import React from 'react'
import Post from './post/post';
import s from './posts.module.css';

const MyPosts = () => {
  return (
    <div className = {s.posts}>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
    </div>)
}

export default MyPosts

