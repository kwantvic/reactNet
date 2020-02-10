import { renderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 5 },
            { id: 2, message: "It's my first post!!!", likesCount: 16 }
        ],
        newPostText: 'hi'
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: "Dimich" },
            { id: 2, name: "Victor" },
            { id: 3, name: "Petya" },
            { id: 4, name: "Olya" },
            { id: 5, name: "Sveta" },
            { id: 6, name: "Augustin" }
        ],
        messages: [
            { id: 1, textMessage: "Hi" },
            { id: 2, textMessage: "How are you?" },
            { id: 3, textMessage: "Yo!" }
        ]
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export default state;