import React from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reduce";
import Dialogs from './Dialogs';

const DialogsConteiner = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick} 
        dialogsPage={state} />
}

export default DialogsConteiner;

