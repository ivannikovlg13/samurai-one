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
  return(
    <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Alex" id="1" />
        <DialogItem name="Ilona" id="2" />
        <DialogItem name="Amelia" id="3" />
        <DialogItem name="Larisa" id="4" />
        <DialogItem name="Sergey" id="5" />
        <DialogItem name="Lida" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi"/>
        <Message message="How are you?"/>
        <Message message="I want to become a doctor"/>
        <Message message="Yo"/>
        <Message message="Ye"/>
      </div>
    </div>
  )
}

export default Dialogs