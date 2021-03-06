import React from "react";
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DilogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessegeForm/AddMessegeForm";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogsItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message textMessage={m.textMessage} key={m.id} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  );
};

export default Dialogs;
