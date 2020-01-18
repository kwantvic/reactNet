import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTggW1GFbkRLwPr5TnqhDQimhEqLnnrDC5aNqnDa3_IgccVmkno&s" alt="avatar" />
            {props.messege}
            <div>
    <span>like {props.count}</span>
            </div>
        </div>


    );
};

export default Post;

