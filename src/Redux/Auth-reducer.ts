import {Dispatch} from "redux";
import {authAPI, ResultCode} from "../API/api";
import {AppThunk} from "./Redux-store";
import axios from "axios";
import {setLoading} from "./App-reducer";

export type InitialStateType = typeof initialState

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    remember: false,
    password: '',
    error: '',
}

export const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {

    switch (action.type) {
        case "AUTH/SET-USER-DATA":
            return {...state, ...action.payload}
        case "AUTH/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state;
    }
}

export type AuthActionsType = setAuthDataActionType | setAuthErrorActionType

export type setAuthDataActionType = ReturnType<typeof setAuthUserData>;
type setAuthErrorActionType = ReturnType<typeof setAuthError>;

//AC
export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'AUTH/SET-USER-DATA',
        payload: {
            userId, email, login, isAuth
        }
    } as const
}
export const setAuthError = (error: string) => {
    return {type: 'AUTH/SET-ERROR', error} as const
}

//TC
export const getAuthUserData = () => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const response = await authAPI.me()
    if (response.resultCode === ResultCode.Success) {
        let {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
    dispatch(setLoading(false));
}


export const login = (email: string, password: string, remember: boolean): AppThunk => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        const response = await authAPI.login(email, password, remember)
        if (response.resultCode === ResultCode.Success) {
            dispatch(getAuthUserData());
        } else if (response.resultCode === ResultCode.Error) {
            dispatch(setAuthError(response.messages[0] ?? 'Unknown error'));
        }
        dispatch(setLoading(false));
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const response = await authAPI.logout()
    if (response.resultCode === ResultCode.Success) {
        dispatch(setAuthUserData(0, '', '', false));
    } else if (response.resultCode === ResultCode.Error) {
        dispatch(setAuthError(response.messages[0] ?? 'Unknown error'));
    }
    dispatch(setLoading(false));
}



