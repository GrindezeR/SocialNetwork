export type stateType = {
    sideBar: Array<friendsType>
    profilePage: {
        postData: Array<postDataType>
    }
    dialogsPage: {
        dialogsNamesData: Array<dialogsNamesDataType>
        dialogsMessagesData: Array<dialogsMessagesDataType>
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

export type postMessageTypeF = (Message:string) => void
export type dialogMessageTypeF = (Message:string) => void