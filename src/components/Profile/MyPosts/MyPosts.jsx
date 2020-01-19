import React from 'react';
import style from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div>
            My post
        <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post messege="Hi, how are you?" count="5" />
                <Post messege="It's my first post!" count="10" />
            </div>
        </div>
    );
};

export default MyPosts;

