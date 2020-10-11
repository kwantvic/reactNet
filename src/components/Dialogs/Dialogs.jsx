import React from "react";
import style from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DilogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogsItem name={d.name} key={d.id} id={d.id} />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message textMessage={m.textMessage} key={m.id} />
  ));

  let addNewMessege = (values) => {
    props.sendMessage(values.newMessageBody)
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItems}>{dialogsElements}</div>
      <div className={style.messages}>
        <div>{messagesElements}</div>
      </div>
      <AddMessegeFormRedux onSubmit={addNewMessege}/>
    </div>
  );
};

const AddMessegeForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessegeFormRedux = reduxForm({form: "dilogAddMessegeForm"})(AddMessegeForm)

export default Dialogs;
