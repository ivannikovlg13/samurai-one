import React from 'react';
import styles from './dialogs.module.css'
import DialogItem from './dialogitem/dialogitem';
import Message from './message/message'

const Dialogs = ({dialogs,messages}) => {
  let dialogElements = dialogs.map((dialog, index) => <DialogItem key = {index} name={dialog.name} id={dialog.id} />)
  let messagesElements = messages.map((message, index ) => <Message key = {index} message={message.list} />)
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