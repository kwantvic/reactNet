import React from 'react';
import style from './MyPosts.module.css';
import Post from './Posts/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reduce';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post messege={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        const action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;

