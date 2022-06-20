import React from 'react'
import Post from '../myposts/post/post';
import s from './myposts.module.css';

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

