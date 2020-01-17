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
            <Post />
        </div>
        </div>
    );
};

export default MyPosts;

