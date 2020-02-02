import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.message}>{props.textMessage}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: "Dimich" },
        { id: 2, name: "Victor" },
        { id: 3, name: "Petya" },
        { id: 4, name: "Olya" },
        { id: 5, name: "Sveta" },
        { id: 6, name: "Augustin" }
    ]

    let messages = [
        { id: 1, textMessage: "Hi" },
        { id: 2, textMessage: "How are you?" },
        { id: 3, textMessage: "Yo!" }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = messages.map(m => <Message textMessage={m.textMessage} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;

