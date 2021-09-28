import {actionAddPost, actionsTypes, actionUpdateNewPostText, postDataType} from "../AllTypes";
import {v1} from "uuid";

type profilePageType = {
    postData: Array<postDataType>
    newPostText: string
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = (): actionAddPost => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string): actionUpdateNewPostText => ({
    type: UPDATE_NEW_POST_TEXT,
    postText: text
});

const profileReducer = (state: profilePageType, action: actionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = state.newPostText.trim();
            if (newPost !== '') {
                state.postData = [{
                    id: v1(),
                    message: newPost,
                    likesCount: 0
                }, ...state.postData];
                state.newPostText = '';

            }
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postText;
            return state;

        default:
            return state;
    }
}

export default profileReducer;