import {v1} from "uuid";
import orc from '../images/orc.jpg';
import tau from '../images/tau.jpg';
import chaos from '../images/chaos.jpg';
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import {actionsTypes, AppStateType} from "./Redux-store";

type storeType = {
    _state: AppStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => AppStateType
    dispatch: (action: actionsTypes) => void
}

let store: storeType = {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();
    }
}