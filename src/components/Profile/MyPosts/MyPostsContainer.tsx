import MyPosts from "./MyPosts";
import {addPost, PostDataType} from "../../../Redux/Profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";
import {Dispatch} from "redux";

// Типизация пропсов для компоненты которая сидит в обертке
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    postsData: PostDataType[]
    isOwner: boolean
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        postsData: state.profilePage.postData,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostText) => dispatch(addPost(newPostText)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);