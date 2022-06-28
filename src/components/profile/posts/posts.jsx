import React from 'react'
import Post from './post/post';
import styles from './posts.module.css';



const MyPosts = ({postData}) => {
  let postItem = postData.map((post,index) => <Post key={index} message={post.message} likesCount={post.likesCount} />)
  return (
    <div className={styles.posts}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div className={styles.buttons}>
          <button>Add posts</button>
        </div>
        {postItem}
      </div>
    </div>
  )
}

export default MyPosts

