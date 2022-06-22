import React from 'react'
import Post from './post/post';
import s from './posts.module.css';

let postData = [
  {message:'How are you?',likesCount:130},
  {message:'Iam Okey',likesCount:520}
]

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div className={s.buttons}>
          <button>Add posts</button>
        </div>
      </div>
      <Post message={postData[0].message} likesCount={postData[0].likesCount} />
      <Post message={postData[1].message} likesCount={postData[1].likesCount} />
    </div>
  )
}

export default MyPosts

