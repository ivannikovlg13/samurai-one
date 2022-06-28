import React from 'react';
import styles from './dialogs.module.css'
import DialogItem from './dialogitem/dialogitem';
import Message from './message/message'

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((dialog, index) => <DialogItem key = {index} name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)
  let messagesElements = props.state.messages.map((message, index ) => <Message key = {index} message={message.list} icon={message.icon} />)
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {dialogElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs