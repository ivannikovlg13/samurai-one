import React from 'react';
import styles from './dialogs.module.css'
import DialogItem from './dialogitem/dialogitem';
import Message from './message/message'


const Dialogs = (props) => {
  let createNewPost = React.createRef()
  let dialogElements = props.state.dialogs.map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
  let messagesElements = props.state.messages.map((message, index) => <Message key={index} message={message.list} icon={message.icon} />)

  const addPostMessage = () => {
    props.dispatch({type: 'ADD-POSTS-MESSAGE'})
    
  }
  const onMessageChange = () => {
    let text = createNewPost.current.value
    props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT',newMessage:text })
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogElements}
      </div>
      <div>
        <ul className={styles.messages}>
          {messagesElements}
        </ul>
        <div className={styles.inner}>
          <textarea value = {props.onMessageText} onChange={onMessageChange} className="textarea" ref={createNewPost}/>
          <button onClick={addPostMessage} className="button">Add message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs