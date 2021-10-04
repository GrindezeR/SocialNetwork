import React from "react";
import MyPosts from "./MyPosts";
import {addPostAC, postDataType, updateNewPostTextAC} from "../../../Redux/Profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";
import {Dispatch} from "redux";

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType // Типизация пропсов для компоненты которая сидит в обертке

type MapStatePropsType = {
    postsData: postDataType[]
    newPostText: string
}

type MapDispatchPropsType = {
    onPostChange: (text: string) => void
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postsData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onPostChange: (text: string) => dispatch(updateNewPostTextAC(text)),
        addPost: () => dispatch(addPostAC()),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);