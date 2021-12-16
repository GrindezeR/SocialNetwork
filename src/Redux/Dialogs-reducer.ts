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
    ] as dialogsNamesDataType[],

    dialogsMessagesData: [
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Lets go!'},
        {id: v1(), message: 'Hi all!'},
        {id: v1(), message: 'Its work...'},
    ] as dialogsMessagesDataType[],
}

const dialogsReducer = (state = initialState, action: DialogsActionsType): InitialStateType => {
    switch (action.type) {
        case 'DIALOG/ADD-MESSAGE':
            if (action.newMessage.trim() !== '') {
                return {
                    ...state,
                    dialogsMessagesData: [
                        ...state.dialogsMessagesData,
                        {id: v1(), message: action.newMessage}
                    ]
                }
            }
            return state;

        default:
            return state;
    }
}

export type DialogsActionsType = addMessageActionType

type addMessageActionType = ReturnType<typeof addMessage>;

export const addMessage = (newMessageText: string) => {
    return {type: "DIALOG/ADD-MESSAGE", newMessage: newMessageText} as const
};

export default dialogsReducer;