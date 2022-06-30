import React from 'react';
import styles from './dialogs.module.css'
import DialogItem from './dialogitem/dialogitem';
import Message from './message/message'

let createNewPost = React.createRef()

const addPost = () => {
  let text = createNewPost.current.value
  alert(text)
}

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
  let messagesElements = props.state.messages.map((message, index) => <Message key={index} message={message.list} icon={message.icon} />)
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
          <textarea className="textarea" ref={createNewPost}></textarea>
          <button onClick={addPost} className="button">Add message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs