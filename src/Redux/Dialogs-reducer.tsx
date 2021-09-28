import {
    actionAddMessage,
    actionsTypes,
    actionUpdateNewMessageText,
    dialogsMessagesDataType,
    dialogsNamesDataType
} from "../AllTypes";
import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addMessageActionCreator = (): actionAddMessage => ({type: "ADD-MESSAGE"});

export const updateNewMessageTextActionCreator = (text: string): actionUpdateNewMessageText => ({
    type: "UPDATE-NEW-MESSAGE-TEXT",
    messageText: text
})

type dialogPageType = {
    dialogsNamesData: Array<dialogsNamesDataType>
    dialogsMessagesData: Array<dialogsMessagesDataType>
    newMessageText: string
}

const dialogsReducer = (state: dialogPageType, action: actionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = state.newMessageText.trim();
            if (newMessage !== '') {
                state.dialogsMessagesData = [...state.dialogsMessagesData, {
                    id: v1(),
                    message: newMessage
                }];
                state.newMessageText = '';
            }
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            return state;

        default:
            return state;
    }
}
export default dialogsReducer;