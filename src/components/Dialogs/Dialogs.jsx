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
        <div className={style.message}>{props.textMessege}</div>
    )
}

const Dialogs = () => {

    let dialogsData = [
        { id: 1, name: "Dimich" },
        { id: 2, name: "Victor" },
        { id: 3, name: "Petya" },
        { id: 4, name: "Olya" },
        { id: 5, name: "Sveta" },
        { id: 6, name: "Augustin" }
    ]

    let messagesData = [
        { id: 1, textMessege: "Hi" },
        { id: 2, textMessege: "How are you?" },
        { id: 3, textMessege: "Yo!" }
    ]
    
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
            </div>
            <div className={style.messages}>
                <Message textMessege={messagesData[0].textMessege} />
                <Message textMessege={messagesData[1].textMessege} />
                <Message textMessege={messagesData[2].textMessege} />
            </div>
        </div>
    )
}

export default Dialogs;

