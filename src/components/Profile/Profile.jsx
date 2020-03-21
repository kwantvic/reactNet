import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';

const Profile = (props) => {
    return <div>
        <ProfileInfo />
        <MyPostsConteiner store={props.store} />
    </div>
}

export default Profile;

