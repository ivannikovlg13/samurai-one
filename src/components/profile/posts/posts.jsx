import React from 'react'
import Post from './post/post';
import styles from './posts.module.css';



const MyPosts = (props) => {
  let postItem = props.postData.map((post,index) => <Post key={index} message={post.message} likesCount={post.likesCount} img={post.img} />)

  let newPostElement = React.createRef()

  const addPost = () => {
    props.addPost()
  }
  const onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }
  return (
    <div className={styles.posts}>
      <h3>My Posts</h3>
      <div className ={styles.inner}>
          <textarea value = {props.newPostText}onChange={onPostChange} className = "textarea" ref={newPostElement}/>
          <button type ="button" 
          className ="button" onClick={addPost}>Add posts</button> 
      </div>
      {postItem}
    </div>
  )
}

export default MyPosts

