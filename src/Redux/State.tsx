import {v1} from "uuid";
import orc from '../images/orc.jpg';
import tau from '../images/tau.jpg';
import chaos from '../images/chaos.jpg';
import {
    actionAddMessage,
    actionsTypes,
    actionUpdateNewMessageText,
    actionUpdateNewPostText,
    storeType
} from "../AllTypes";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const addPostActionCreator = () => ({type: ADD_POST}) as const;
export const updateNewPostTextActionCreator = (text: string): actionUpdateNewPostText =>
    ({type: UPDATE_NEW_POST_TEXT, postText: text});
export const addMessageActionCreator = (): actionAddMessage => ({type: "ADD-MESSAGE"});
export const updateNewMessageTextActionCreator = (text: string): actionUpdateNewMessageText =>
    ({type: "UPDATE-NEW-MESSAGE-TEXT", messageText: text})


export let store: storeType = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('no subscribers (observers)')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action: actionsTypes) {
        switch (action.type) {
            case ADD_POST:
                const newPost = this._state.profilePage.newPostText.trim();
                if (newPost !== '') {
                    this._state.profilePage.postData = [{
                        id: v1(),
                        message: newPost,
                        likesCount: 0
                    }, ...this._state.profilePage.postData];
                    this._state.profilePage.newPostText = '';
                    this._callSubscriber();
                }
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.postText;
                this._callSubscriber();
                break;

            case ADD_MESSAGE:
                const newMessage = this._state.dialogsPage.newMessageText.trim();
                if (newMessage !== '') {
                    this._state.dialogsPage.dialogsMessagesData = [...this._state.dialogsPage.dialogsMessagesData, {
                        id: v1(),
                        message: newMessage
                    }];
                    this._state.dialogsPage.newMessageText = '';
                    this._callSubscriber();
                }
                break;
            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.dialogsPage.newMessageText = action.messageText;
                this._callSubscriber();
                break;
        }
    }
}
export default store;