import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../API/api";

export type PostDataType = {
    id: string
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}

export type InitialStateType = {
    postData: PostDataType[]
    newPostText: string
    profile: ProfileType | null
}

const initialState = {
    postData: [
        {id: v1(), message: 'Hello ALL!', likesCount: 15},
        {id: v1(), message: 'How are you?', likesCount: 30},
        {id: v1(), message: 'LOL', likesCount: 230},
    ],
    newPostText: '',
    profile: null
}

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost = state.newPostText.trim();
            if (newPost !== '') {
                return {
                    ...state,
                    postData: [{id: v1(), message: newPost, likesCount: 0}, ...state.postData],
                    newPostText: ''
                }
            }
            return state;

        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.postText};
        case "SET-USERS-PROFILE":
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

type ActionsType = addPostActionType | updateNewPostTextActionType | setUsersProfile


type addPostActionType = ReturnType<typeof addPost>;
type updateNewPostTextActionType = ReturnType<typeof updateNewPostText>;
type setUsersProfile = ReturnType<typeof setUsersProfile>;

export const addPost = () => {
    return {type: "ADD-POST"} as const
};

export const updateNewPostText = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        postText: text
    } as const
};

export const setUsersProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USERS-PROFILE', profile
    } as const
}

export const getUsersProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getUserProfile(userId)
            .then(data => {
                dispatch(setUsersProfile(data));
            })
    }
}

