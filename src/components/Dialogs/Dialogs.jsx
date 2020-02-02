import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogItem/DilogItem';
import Message from './Message/Message';

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

    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);

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

