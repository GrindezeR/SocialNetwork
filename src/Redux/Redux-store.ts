import {combineReducers, createStore} from "redux";
import profileReducer, {addPostACType, updateNewPostTextACType} from "./Profile-reducer";
import dialogsReducer, {addMessageACType, updateNewMessageTextACType} from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import {userReducer} from "./User-reducer";

export type actionsTypes = addPostACType | updateNewPostTextACType | addMessageACType | updateNewMessageTextACType

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: userReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);