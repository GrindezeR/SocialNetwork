import {Dispatch} from "redux";
import {authAPI} from "../API/api";
import {AppThunk} from "./Redux-store";

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

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload}
        case "SET-ERROR":
            return {...state, error: action.error}
        default:
            return state;
    }
}

export type ActionsType = setAuthDataActionType | setAuthErrorActionType

type setAuthDataActionType = ReturnType<typeof setAuthUserData>;
type setAuthErrorActionType = ReturnType<typeof setAuthError>;

//AC
export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            userId, email, login, isAuth
        }
    } as const
}
export const setAuthError = (error: string) => {
    return {type: 'SET-ERROR', error} as const
}

//TC
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
                    dispatch(getAuthUserData());
                } else {
                    dispatch(setAuthError(res.data.messages[0]));
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



