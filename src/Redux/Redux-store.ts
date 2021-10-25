import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import {userReducer} from "./User-reducer";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: userReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

//@ts-ignore
window.store = store