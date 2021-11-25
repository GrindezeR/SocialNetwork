import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, ResultCode} from "../API/api";

export type PostDataType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type InitialStateType = {
    postData: PostDataType[]
    profile: ProfileType
    status: string
}

const initialState: InitialStateType = {
    postData: [
        {id: v1(), message: 'Hello ALL!', likesCount: 15},
        {id: v1(), message: 'How are you?', likesCount: 30},
        {id: v1(), message: 'LOL', likesCount: 230},
    ],

    profile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: ''
        }
    },
    status: ''
}

export const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            if (action.newPostText.trim() !== '') {
                return {
                    ...state,
                    postData: [
                        {id: v1(), message: action.newPostText, likesCount: 0},
                        ...state.postData
                    ],
                }
            }
            return state;

        case "SET-USERS-PROFILE":
            return {...state, profile: action.profile}
        case "SET-STATUS-PROFILE":
            return {...state, status: action.status}
        default:
            return state;
    }
}

type ActionsType = addPostActionType | setUsersProfileActionType
    | setUserStatusActionType


type addPostActionType = ReturnType<typeof addPost>;
type setUsersProfileActionType = ReturnType<typeof setUsersProfile>;
type setUserStatusActionType = ReturnType<typeof setProfileStatus>;

//Action Creators
export const addPost = (newPostText: string) => {
    return {type: "ADD-POST", newPostText} as const
};

export const setUsersProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USERS-PROFILE', profile
    } as const
}

export const setProfileStatus = (status: string) => {
    return {
        type: 'SET-STATUS-PROFILE', status
    } as const
}

//Thunk Creators
export const getUsersProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUsersProfile(data));
            })
    }
}

export const getProfileStatus = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(res => {
                dispatch(setProfileStatus(res.data));
            })
    }
}

export const updateProfileStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.setStatus(status)
            .then(res => {
                if (res.resultCode === ResultCode.Success) {
                    dispatch(setProfileStatus(status))
                }
            })
    }
}

