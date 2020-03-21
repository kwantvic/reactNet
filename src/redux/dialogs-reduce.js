const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSEGE';

let initialState = {
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

const dialogsReduce = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 4, textMessage: body }]
            }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReduce;
