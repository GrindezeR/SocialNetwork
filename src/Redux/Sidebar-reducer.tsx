import {v1} from "uuid";
import orc from "../images/orc.jpg";
import tau from "../images/tau.jpg";
import chaos from '../images/chaos.jpg';
import {actionsTypes} from "./Redux-store";

export type friendsType = {
    id: string
    name: string
    avatar: string;
}

export type initialStateType = typeof initialState;

const initialState = [
    {id: v1(), name: 'Orcs', avatar: orc},
    {id: v1(), name: 'Tau', avatar: tau},
    {id: v1(), name: 'Chaos', avatar: chaos},
];

const sidebarReducer = (state: initialStateType = initialState, action: actionsTypes) => {
    return state;
}

export default sidebarReducer;
