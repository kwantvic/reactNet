import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/Preloader/FormsControls/FormsControls";
import style from "./MyPosts.module.css";
import Post from "./Posts/Post";

const maxLength10 = maxLenghtCreator(10);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post messege={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={style.postsBlock}>
      <h3>My post</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name="newPostText"  placeholder={"Post message"}
        validate={[required, maxLength10]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPost" })(AddNewPostForm);

export default MyPosts;
