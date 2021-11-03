export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

export type InitialStateType = {
    users: UsersType[]
    pageLimit: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const initialState: InitialStateType = {
    users: [],
    currentPage: 1,
    pageLimit: 15,
    totalUsersCount: 200,
    isFetching: false,
    followingInProgress: [],
}

export const userReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USERS":
            return {...state, users: [...action.users]}
        case "FOLLOW-TOGGLE":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.number}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.number}
        case "SET-FETCHING":
            return {...state, isFetching: action.status}
        case "FOLLOWING-PROGRESS":
            return {
                ...state,
                followingInProgress: action.isLoading ?
                    [...state.followingInProgress, action.userId]
                    :
                    state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export type ActionTypes = unFollowActionType
    | setUsersActionType | setCurrentPageActionType
    | setTotalUsersCountActionType | setFetchingActionType | followingInProgress

type unFollowActionType = ReturnType<typeof followToggle>;
type setUsersActionType = ReturnType<typeof setUsers>;
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>;
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;
type setFetchingActionType = ReturnType<typeof setFetching>;
type followingInProgress = ReturnType<typeof setFollowingInProgress>;

export const followToggle = (userId: number) => {
    return {type: 'FOLLOW-TOGGLE', userId} as const
}

export const setUsers = (users: UsersType[]) => {
    return {type: 'SET-USERS', users} as const
}

export const setCurrentPage = (number: number) => {
    return {type: 'SET-CURRENT-PAGE', number} as const
}

export const setTotalUsersCount = (number: number) => {
    return {type: 'SET-TOTAL-USERS-COUNT', number} as const
}

export const setFetching = (status: boolean) => {
    return {type: 'SET-FETCHING', status} as const
}

export const setFollowingInProgress = (isLoading: boolean, userId:number) => {
    return {type: 'FOLLOWING-PROGRESS', isLoading, userId} as const
}