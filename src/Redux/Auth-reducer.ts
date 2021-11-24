import {Dispatch} from "redux";
import {authAPI} from "../API/api";
import {AppThunk} from "./Redux-store";

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean

    password: string
    remember: boolean
}

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    remember: false,
    password: '',
}

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export type ActionsType = setAuthDataActionType

type setAuthDataActionType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {type: 'SET-USER-DATA', payload: {userId, email, login, isAuth}} as const
}

export const getAuthUserData = () => {
    // Функция getAuthUserData это thunkCreator,
    // сам thunk это функция которую возвращает getAuthUserData
    return (dispatch: Dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}

export const login = (email: string, password: string, remember: boolean): AppThunk => {
    return (dispatch) => {
        authAPI.login(email, password, remember)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            })
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(setAuthUserData(0, '', '', false));
                }
            })
    }
}



