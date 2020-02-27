let store = {
    _state: {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;