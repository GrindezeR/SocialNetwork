export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: null
    followed: boolean
}

export type initialStateType = {
    items: UsersType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: initialStateType = {
    items: [],
    currentPage: 1,
    pageSize: 5,
    totalCount: 50,
    isFetching: true,
}

export const userReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case "SET-USERS":
            return {...state, items: [...action.users]}
        case "FOLLOW-TOGGLE":
            return {
                ...state,
                items: state.items.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.number}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalCount: action.number}
        case "SET-FETCHING":
            return {...state, isFetching: action.status}
        default:
            return state
    }
}

export type ActionTypes = unFollowActionType
    | setUsersActionType | setCurrentPageActionType
    | setTotalUsersCountActionType | setFetchingActionType

type unFollowActionType = ReturnType<typeof followToggleAC>;
type setUsersActionType = ReturnType<typeof setUsersAC>;
type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>;
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>;
type setFetchingActionType = ReturnType<typeof setFetchingAC>;

export const followToggleAC = (userId: number) => {
    return {type: 'FOLLOW-TOGGLE', userId} as const
}

export const setUsersAC = (users: UsersType[]) => {
    return {type: 'SET-USERS', users} as const
}

export const setCurrentPageAC = (number: number) => {
    return {type: 'SET-CURRENT-PAGE', number} as const
}

export const setTotalUsersCountAC = (number: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', number} as const
}

export const setFetchingAC = (status: boolean) => {
    return {type: 'SET-FETCHING', status} as const
}