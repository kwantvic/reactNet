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
    ]
}

const dialogsReduce = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 4, textMessage: body }]
            }
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReduce;
