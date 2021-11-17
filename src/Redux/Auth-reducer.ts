import {Dispatch} from "redux";
import {authAPI} from "../API/api";

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
            return {...state, ...action.data, isAuth: true}
        case "SET-USER-DATA-FROM-LOGIN":
            return {...state, ...action.payload, isAuth: true}
        default:
            return state;
    }
}

type ActionsType = setAuthDataActionType | authoriseMeType

type setAuthDataActionType = ReturnType<typeof setAuthUserData>;
type authoriseMeType = ReturnType<typeof setUserLoginData>;

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {type: 'SET-USER-DATA', data: {userId, email, login}} as const
}

export const setUserLoginData = (payload: { email: string, password: string, remember: boolean }) => {
    return {
        type: 'SET-USER-DATA-FROM-LOGIN', payload
    } as const
}

export const authUserCheck = () => {
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

export const authUser = (email: string, password: string, remember: boolean) => {
    return (dispatch: Dispatch) => {
        authAPI.authorizeMe(email, password, remember)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setUserLoginData({email, password, remember}));
                } else {
                    console.log('Auth error');
                }
            })
    }
}

