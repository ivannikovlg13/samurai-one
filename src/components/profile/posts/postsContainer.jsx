import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './posts';


const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage

  const addPost = () => {
    props.store.dispatch(addPostActionCreator())
  }
  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }
  return <MyPosts posts = {state.postData} onPostChange={onPostChange} addPost={addPost} newPostText = {state.newPostText}/>
  
}

export default MyPostsContainer

