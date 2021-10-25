import {v1} from "uuid";

export type dialogsNamesDataType = {
    id: string
    name: string
}
export type dialogsMessagesDataType = {
    id: string
    message: string
}
export type InitialStateType = typeof initialState;

const initialState = {
    dialogsNamesData: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Bob'},
        {id: v1(), name: 'Tom'},
        {id: v1(), name: 'John'},
    ] as Array<dialogsNamesDataType>,

    dialogsMessagesData: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Lets go!'},
        {id: v1(), message: 'Hi all!'},
        {id: v1(), message: 'Its work...'},
    ] as Array<dialogsMessagesDataType>,
    newMessageText: '',
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = state.newMessageText.trim();
            if (newMessage !== '') {
                return {
                    ...state,
                    dialogsMessagesData: [...state.dialogsMessagesData, {id: v1(), message: newMessage}],
                    newMessageText: ''
                };
            }
            return state;

        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.messageText};

        default:
            return state;
    }
}

type ActionsType = addMessageActionType | updateNewMessageTextActionType

type addMessageActionType = ReturnType<typeof addMessage>;
type updateNewMessageTextActionType = ReturnType<typeof updateNewMessageText>;

export const addMessage = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
};
export const updateNewMessageText = (text: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        messageText: text
    } as const
};

export default dialogsReducer;