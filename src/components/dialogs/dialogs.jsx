import React from 'react';
import styles from './dialogs.module.css'
import DialogItem from './dialogitem/dialogitem';
import Message from './message/message'


const Dialogs = (props) => {
  let state = props.dialogsPage
  let createNewPost = React.createRef()
  let dialogElements = state.dialogs.map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
  let messagesElements = state.messages.map((message, index) => <Message key={index} message={message.list} icon={message.icon} />)

  const onaddPostMessage = () => {
    props.addPostMessage()
    
  }
  const onMessageChange = () => {
    let text = createNewPost.current.value
    props.messageChange(text)
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
          <textarea placeholder='Write new message' value = {props.onMessageText} onChange={onMessageChange} className="textarea" ref={createNewPost}/>
          <button onClick={onaddPostMessage} className="button">Add message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs