import React from 'react';
import style from './Post.module.css';

const Post = () => {
    return (
        <div className={style.item}>
            <img src="https://2.bp.blogspot.com/-5eTnQ3ZESaw/XGBHVH3tb6I/AAAAAAAABCk/mj1AAbS3iEUP1ci-s1DM2WnA1fBREZeugCLcBGAs/s1600/1549592568.png" alt="avatar" />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>


    );
};

export default Post;

