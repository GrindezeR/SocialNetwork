import {getAuthUserData} from "./Auth-reducer";
import {AppThunk} from "./Redux-store";

type InitialStateType = {
    initialized: boolean
}
export const initialState: InitialStateType = {
    initialized: false
}

export const AppReducer = (state = initialState, action: AppActionsType) => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: action.status}
        default:
            return state;
    }
}

export type AppActionsType = ReturnType<typeof setInitialized>;

export const setInitialized = (status: boolean) => {
    return {type: 'SET-INITIALIZED', status} as const
}


export const initializeApp = (): AppThunk => {
    return (dispatch) => {
        dispatch(getAuthUserData())
            .then(() => {
                dispatch(setInitialized(true));
            })
    }
}