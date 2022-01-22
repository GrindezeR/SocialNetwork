import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, ResultCode} from "../API/api";
import {setLoading} from "./App-reducer";
import {AppStateType, AppThunk} from "./Redux-store";

export const profileReducer = (state = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case "PROFILE/ADD-POST":
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

        case "PROFILE/SET-USERS-PROFILE":
            return {...state, profile: action.profile}
        case "PROFILE/SET-STATUS-PROFILE":
            return {...state, status: action.status}
        case "PROFILE/DELETE-POST":
            return {...state, postData: state.postData.filter(p => p.id !== action.postId)}
        case "PROFILE/SAVE-PHOTO-SUCCESS":
            return {...state, profile: {...state.profile, photos: action.photos}}
        case "PROFILE/SET-ERROR":
            return {...state, error: action.error}
        default:
            return state;
    }
}

export type ProfileActionType = addPostActionType | setUsersProfileActionType
    | setUserStatusActionsType | ReturnType<typeof deletePost> | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof setProfileError>


export type addPostActionType = ReturnType<typeof addPost>;
type setUsersProfileActionType = ReturnType<typeof setUsersProfile>;
type setUserStatusActionsType = ReturnType<typeof setProfileStatus>;

//Action Creators
export const addPost = (newPostText: string) => {
    return {type: "PROFILE/ADD-POST", newPostText} as const
};
export const setUsersProfile = (profile: ProfileType) => {
    return {
        type: 'PROFILE/SET-USERS-PROFILE', profile
    } as const
}
export const setProfileStatus = (status: string) => {
    return {
        type: 'PROFILE/SET-STATUS-PROFILE', status
    } as const
}
export const deletePost = (postId: string) => {
    return {type: 'PROFILE/DELETE-POST', postId} as const
}
export const savePhotoSuccess = (photos: { small: string, large: string }) => {
    return {type: 'PROFILE/SAVE-PHOTO-SUCCESS', photos} as const
}
export const setProfileError = (error: string) => {
    return {type: 'PROFILE/SET-ERROR', error} as const
}

//Thunk Creators
export const getUsersProfile = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const response = await profileAPI.getUserProfile(userId)
    dispatch(setUsersProfile(response));
    dispatch(setLoading(false));
}

export const getProfileStatus = (userId: number) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const response = await profileAPI.getStatus(userId)
    dispatch(setProfileStatus(response.data));
    dispatch(setLoading(false));
}

export const updateProfileStatus = (status: string) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const response = await profileAPI.setStatus(status)
    if (response.resultCode === ResultCode.Success) {
        dispatch(setProfileStatus(status))
    }
    dispatch(setLoading(false));
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    const response = await profileAPI.setPhoto(file);
    if (response.resultCode === ResultCode.Success) {
        dispatch(savePhotoSuccess(response.data.photos));
    } else {
        dispatch(setProfileError(response.messages[0]));
    }
    dispatch(setLoading(false));
}

export const updateProfileData = (profileData: TMPData): AppThunk =>
    async (dispatch, getState: () => AppStateType) => {
        dispatch(setLoading(true));
        const response = await profileAPI.updateProfile(profileData);
        if (response.resultCode === ResultCode.Success) {
            await dispatch(getUsersProfile(getState().profilePage.profile.userId));
            // dispatch(savePhotoSuccess(response.data.photos));
        } else {
            dispatch(setProfileError(response.messages[0]));
            setTimeout(() => {
                dispatch(setProfileError(''));
            }, 5000)
        }
        dispatch(setLoading(false));
    }

export type TMPData = {
    fullName: string
    aboutMe: string
    lookingForAJob: boolean,
    lookingForAJobDescription: string
}

export type PostDataType = {
    id: string
    message: string
    likesCount: number
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type ProfileType = {
    aboutMe: string
    contacts: ContactsType,
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
    error: string
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
    status: '',
    error: '',
}
