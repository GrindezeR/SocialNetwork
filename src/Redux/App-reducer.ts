import {getAuthUserData} from "./Auth-reducer";
import {AppThunk} from "./Redux-store";

type InitialStateType = {
    initialized: boolean
    loading: boolean
}
export const initialState: InitialStateType = {
    initialized: false,
    loading: false
}

export const AppReducer = (state = initialState, action: AppActionsType) => {
    switch (action.type) {
        case "APP/SET-INITIALIZED":
            return {...state, initialized: true}
        case "APP/SET-LOADING":
            return {...state, loading: action.status}
        default:
            return state;
    }
}

export type AppActionsType = ReturnType<typeof setAppInitialized>
    | ReturnType<typeof setLoading>

export const setAppInitialized = () => {
    return {type: 'APP/SET-INITIALIZED'} as const
}
export const setLoading = (status: boolean) => {
    return {type: 'APP/SET-LOADING', status} as const
}


export const initializeApp = (): AppThunk => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(setAppInitialized());
}