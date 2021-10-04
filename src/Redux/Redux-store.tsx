import {combineReducers, createStore} from "redux";
import profileReducer, {addPostACType, updateNewPostTextACType} from "./Profile-reducer";
import dialogsReducer, {addMessageACType, updateNewMessageTextACType} from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";

export type actionsTypes = addPostACType | updateNewPostTextACType | addMessageACType | updateNewMessageTextACType

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);