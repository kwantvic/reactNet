import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/Preloader/FormsControls/FormsControls";
import { maxLenghtCreator, required } from "../../../utils/validators/validators";

const maxLength50 = maxLenghtCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send2</button>
      </div>
    </form>
  );
};

export default reduxForm({form: 'dilogAddMessageForm'})(AddMessageForm)