import {addPostActionCreator} from "./Redux/State";

export type storeType = {
    _state: stateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => stateType
    dispatch: (action: actionsTypes) => void
}

export type actionsTypes = actionAddPost
    | actionUpdateNewPostText
    | actionAddMessage
    | actionUpdateNewMessageText

export type actionAddPost = ReturnType<typeof addPostActionCreator>
//Можно так, автоматически возьмет тип который вернет функция

export type actionUpdateNewPostText = {
    type: 'UPDATE-NEW-POST-TEXT'
    postText: string
}
export type actionAddMessage = {
    type: 'ADD-MESSAGE'
}
export type actionUpdateNewMessageText = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    messageText: string
}

export type stateType = {
    sideBar: Array<friendsType>
    profilePage: {
        postData: Array<postDataType>
        newPostText: string
    }
    dialogsPage: {
        dialogsNamesData: Array<dialogsNamesDataType>
        dialogsMessagesData: Array<dialogsMessagesDataType>
        newMessageText: string
    }
}
export type postDataType = {
    id: string
    message: string
    likesCount: number
}
export type dialogsNamesDataType = {
    id: string
    name: string
}
export type dialogsMessagesDataType = {
    id: string
    message: string
}
export type friendsType = {
    id: string
    name: string
    avatar: string;
}