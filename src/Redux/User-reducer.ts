import {ResultCode, usersAPI} from "../API/api";
import {Dispatch} from "redux";

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
    pageLimit: 10,
    totalUsersCount: 200,
    isFetching: false,
    followingInProgress: [],
}

export const userReducer = (state = initialState, action: UserActionsType): InitialStateType => {
    switch (action.type) {
        case "USER/SET-USERS":
            return {...state, users: [...action.users]}
        case "USER/FOLLOW-TOGGLE":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: !u.followed} : u)
            }
        case "USER/SET-CURRENT-PAGE":
            return {...state, currentPage: action.number}
        case "USER/SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.number}
        case "USER/SET-FETCHING":
            return {...state, isFetching: action.status}
        case "USER/FOLLOWING-PROGRESS":
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

export type UserActionsType = unFollowActionType
    | setUsersActionType | setCurrentPageActionType
    | setTotalUsersCountActionType | setFetchingActionType | followingInProgress

type unFollowActionType = ReturnType<typeof followToggle>;
type setUsersActionType = ReturnType<typeof setUsers>;
type setCurrentPageActionType = ReturnType<typeof setCurrentPage>;
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>;
type setFetchingActionType = ReturnType<typeof setFetching>;
type followingInProgress = ReturnType<typeof setFollowingInProgress>;

export const followToggle = (userId: number) => {
    return {type: 'USER/FOLLOW-TOGGLE', userId} as const
}
export const setUsers = (users: UsersType[]) => {
    return {type: 'USER/SET-USERS', users} as const
}
export const setCurrentPage = (number: number) => {
    return {type: 'USER/SET-CURRENT-PAGE', number} as const
}
export const setTotalUsersCount = (number: number) => {
    return {type: 'USER/SET-TOTAL-USERS-COUNT', number} as const
}
export const setFetching = (status: boolean) => {
    return {type: 'USER/SET-FETCHING', status} as const
}
export const setFollowingInProgress = (isLoading: boolean, userId: number) => {
    return {type: 'USER/FOLLOWING-PROGRESS', isLoading, userId} as const
}

//Thunks
export const getUsers = (page: number, pageLimit: number) =>
    async (dispatch: Dispatch) => {
        dispatch(setFetching(true));
        dispatch(setCurrentPage(page));

        const response = await usersAPI.getUsers(page, pageLimit);
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount)); //Too many users
        dispatch(setFetching(false));
    }

export const followingUsers = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    const response = await usersAPI.setFollow(userId)
    if (response.resultCode === ResultCode.Success) {
        dispatch(followToggle(userId));
        dispatch(setFollowingInProgress(false, userId));
    }
}

export const unfollowingUsers = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setFollowingInProgress(true, userId));
    const response = await usersAPI.setUnfollow(userId)
    if (response.resultCode === ResultCode.Success) {
        dispatch(followToggle(userId));
        dispatch(setFollowingInProgress(false, userId));
    }
}