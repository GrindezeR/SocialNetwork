import {v1} from "uuid";
import orc from "../common/images/orc.jpg";
import tau from "../common/images/tau.jpg";
import chaos from '../common/images/chaos.jpg';

export type friendsType = {
    id: string
    name: string
    avatar: string;
}

export type initialStateType = typeof initialState;

const initialState = [
    {id: v1(), name: 'Alex', avatar: orc},
    {id: v1(), name: 'Bob', avatar: tau},
    {id: v1(), name: 'Alise', avatar: chaos},
];

const sidebarReducer = (state: initialStateType = initialState, action: ActionsType) => {
    return state;
}

type ActionsType = string

export default sidebarReducer;
