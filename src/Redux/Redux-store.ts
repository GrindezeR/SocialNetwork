import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import {userReducer} from "./User-reducer";
import {authReducer} from "./Auth-reducer";
import thunkMiddleware from "redux-thunk";

export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store