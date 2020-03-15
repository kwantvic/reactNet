import profileReduce from "./profile-reduce";
import dialogsReduce from "./dialogs-reduce";

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
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReduce(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReduce(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;