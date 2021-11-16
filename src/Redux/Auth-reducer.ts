import {Dispatch} from "redux";
import {authAPI} from "../API/api";

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

type ActionsType = setAuthDataActionType

type setAuthDataActionType = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {type: 'SET-USER-DATA', data: {userId, email, login}} as const
}

export const authUser = () => {
    // Функция authUser это thunkCreator, сам thunk это функция которую возвращает authUser
    return (dispatch: Dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}

