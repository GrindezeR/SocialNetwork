import {v1} from "uuid";
import {actionsTypes} from "./Redux-store";

export type postDataType = {
    id: string
    message: string
    likesCount: number
}

export type initialStateType = typeof initialState

const initialState = {
    postData: [
        {id: v1(), message: 'Hello ALL!', likesCount: 15},
        {id: v1(), message: 'How are you?', likesCount: 30},
        {id: v1(), message: 'LOL', likesCount: 230},
    ] as postDataType[],
    newPostText: '',
}

const profileReducer = (state: initialStateType = initialState, action: actionsTypes): initialStateType => {
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

        default:
            return state;
    }
}

export type addPostACType = ReturnType<typeof addPostAC>;
export type updateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>;

export const addPostAC = () => {
    return {type: "ADD-POST"} as const
};

export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        postText: text
    } as const
};

export default profileReducer;