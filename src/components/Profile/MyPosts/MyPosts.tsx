import React, {ChangeEvent, KeyboardEvent} from "react";
import Post from "./Posts/Post";
import s from './MyPosts.module.css';
import {actionsTypes, postDataType} from "../../../AllTypes";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/State";

type myPostsPropsType = {
    postData: Array<postDataType>
    newPostText: string
    dispatch: (action: actionsTypes) => void
}

function MyPosts(props: myPostsPropsType) {
    const postsElements = props.postData.map(p => {
        return (
            <Post key={p.id}
                  id={p.id}
                  message={p.message}
                  likesCount={p.likesCount}/>
        );
    })

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const onEnterAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addPost();
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value));
    }

    return (
        <div className={s.wrapper}>
            <div className={s.newPost}>
                <textarea
                    className={s.textArea}
                    placeholder={'Type your post'}
                    onKeyPress={onEnterAddPost}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <button
                    className={s.submitButton}
                    onClick={addPost}
                    type={'submit'}>
                    <span>Submit</span>
                </button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;