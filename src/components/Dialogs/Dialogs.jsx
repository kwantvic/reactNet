import React from 'react';
import style from './Dialogs.module.css';
import DialogsItem from './DialogItem/DilogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);

    let messagesElements = props.messages.map(m => <Message textMessage={m.textMessage} />);

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

