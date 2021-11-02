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

