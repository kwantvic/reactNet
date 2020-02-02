import React from 'react';
import style from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {

    let posts = [
        { id: 1, message: "Hi, how are you?", likesCount: 5 },
        { id: 2, message: "It's my first post!!!", likesCount: 16 }
    ]

    let postsElements = posts.map(p => <Post messege={p.message} likesCount={p.likesCount} />)

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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;

