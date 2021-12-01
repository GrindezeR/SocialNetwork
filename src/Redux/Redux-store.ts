import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionType, profileReducer} from "./Profile-reducer";
import dialogsReducer, {DialogsActionsType} from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import {UserActionsType, userReducer} from "./User-reducer";
import {AuthActionsType, authReducer} from "./Auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {AppActionsType, AppReducer} from "./App-reducer";

export const rootReducer = combineReducers({
    app: AppReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: userReducer,
    auth: authReducer,
})
export type  AppActionsTypes = AuthActionsType
    | UserActionsType
    | AppActionsType
    | ProfileActionType
    | DialogsActionsType

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsTypes>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store