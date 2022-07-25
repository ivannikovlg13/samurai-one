import React from 'react';
import { addPostMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './dialogs';


const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage


  const addPostMessage = () => {
    props.store.dispatch(addPostMessageActionCreator())

  }
  const onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageTextActionCreator(body))
  }

  return <Dialogs dialogsPage={state} messageChange={onMessageChange} addPostMessage={addPostMessage} onMessageText={state.onMessageText}/>
}

export default DialogsContainer