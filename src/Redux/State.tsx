import {v1} from "uuid";
import orc from '../images/orc.jpg';
import tau from '../images/tau.jpg';
import chaos from '../images/chaos.jpg';
import {stateType} from "../AllTypes";

let rerenderEntireTree: () => void;

let state: stateType = {
    sideBar: [
        {id: v1(), name: 'Orcs', avatar: orc},
        {id: v1(), name: 'Tau', avatar: tau},
        {id: v1(), name: 'Chaos', avatar: chaos},
    ],
    profilePage: {
        postData: [
            {id: v1(), message: 'Hello ALL!', likesCount: 15},
            {id: v1(), message: 'How are you?', likesCount: 30},
            {id: v1(), message: 'LOL', likesCount: 230},
        ],
        newPostText: '',
    },
    dialogsPage: {
        dialogsNamesData: [
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Bob'},
            {id: v1(), name: 'Tom'},
            {id: v1(), name: 'John'},
        ],

        dialogsMessagesData: [
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Lets go!'},
            {id: v1(), message: 'Hi all!'},
            {id: v1(), message: 'Its work...'},
        ],
        newMessageText: '',
    },
}

//Functions
export const addPost = () => {
    const newPost = state.profilePage.newPostText.trim();
    if (newPost !== '') {
        state.profilePage.postData = [{id: v1(), message: newPost, likesCount: 0}, ...state.profilePage.postData];
        state.profilePage.newPostText = '';
        rerenderEntireTree();
    }
}

export const addMessage = () => {
    const newMessage = state.dialogsPage.newMessageText.trim();
    if (newMessage !== '') {
        state.dialogsPage.dialogsMessagesData = [...state.dialogsPage.dialogsMessagesData, {
            id: v1(),
            message: newMessage
        }];
        state.dialogsPage.newMessageText = '';
        rerenderEntireTree()
    }
}

export const updateNewPostText = (text: string) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree();
}

export const updateNewMessageText = (text: string) => {
    state.dialogsPage.newMessageText = text;
    rerenderEntireTree();
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer;
}

export default state;