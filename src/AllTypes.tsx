export type storeType = {
    _callSubscriber: () => void
    subscribe:(observer:() => void) => void
    _state: stateType
    getState: () => stateType
    addPost: () => void
    addMessage: () => void
    updateNewPostText: (text:string) => void
    updateNewMessageText: (text:string) => void
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

export type postMessageTypeF = (Message: string) => void
export type dialogMessageTypeF = (Message: string) => void