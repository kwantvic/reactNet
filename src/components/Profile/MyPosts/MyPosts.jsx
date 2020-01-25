import React from 'react';
import style from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, message: "Hi, how are you?", likesCount: 5 },
        { id: 2, message: "It's my first post!!!", likesCount: 16 }
    ]

    return (
        <div className={style.postsBlock}>
            <h3>My post</h3>
        <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                <Post messege={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post messege={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>
        </div>
    );
};

export default MyPosts;

