import {v1} from "uuid";
import {postDataType} from "../components/Profile/MyPosts/Posts/Post";
import {dialogsMessagesDataType, dialogsNamesDataType} from "../components/Dialogs/Dialogs";
import orc from '../images/orc.jpg';
import tau from '../images/tau.jpg';
import chaos from '../images/chaos.jpg';

export type stateType = {
    sideBar:Array<friendsType>
    profilePage: {
        postData: Array<postDataType>
    }
    dialogsPage: {
        dialogsNamesData: Array<dialogsNamesDataType>
        dialogsMessagesData: Array<dialogsMessagesDataType>
    }
}

export type friendsType = {
    id:string
    name:string
    avatar: string;
}

let state: stateType = {
    sideBar: [
            {id: v1(), name: 'Orcs', avatar: orc},
            {id: v1(), name: 'Tau', avatar: tau},
            {id: v1(), name: 'Chaos', avatar: chaos},
        ],
    profilePage: {
        postData: [
            {id: v1(), message: 'Hello ALL!', likesCount: 15},
            {id: v1(), message: 'Chaos is POWER!', likesCount: 30},
            {id: v1(), message: 'AHAHAH', likesCount: 23},
        ]
    },

    dialogsPage: {
        dialogsNamesData: [
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Slaanesh'},
            {id: v1(), name: 'Gorka'},
            {id: v1(), name: 'Morka'},
            {id: v1(), name: 'Khorn'},
            {id: v1(), name: 'Imperator'},
        ],

        dialogsMessagesData: [
            {id: v1(), message: 'Hello'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Lets go!'},
            {id: v1(), message: 'Hi all!'},
            {id: v1(), message: 'Its work...'},
            {id: v1(), message: 'WAAAGH!'},
            {id: v1(), message: 'For the imperator!'},
        ]
    }
}

export default state;