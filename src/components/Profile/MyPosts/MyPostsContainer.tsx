import MyPosts from "./MyPosts";
import {addPost, PostDataType, updateNewPostText} from "../../../Redux/Profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";
import {Dispatch} from "redux";

export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType // Типизация пропсов для компоненты которая сидит в обертке

type MapStatePropsType = {
    postsData: PostDataType[]
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
        onPostChange: (text: string) => dispatch(updateNewPostText(text)),
        addPost: () => dispatch(addPost()),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);