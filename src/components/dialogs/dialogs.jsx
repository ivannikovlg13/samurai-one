import React from 'react';
import s from './dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return (
    <div className={s.dialog}>
      <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

let dialogs = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Ilona' },
  { id: 3, name: 'Amelia' },
  { id: 4, name: 'Larisa' },
  { id: 5, name: 'Sergey' },
  { id: 6, name: 'Lida' },

]
let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)


let messages = [
  { list: 'Hi' },
  { list: 'How are you?' },
  { list: 'I want to become a doctor' },
  { list: 'Yo' },
  { list: 'Yo2' },
  { list: 'Yo3' },

]

let messagesElements = messages.map(m => <Message message={m.list} />)

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs