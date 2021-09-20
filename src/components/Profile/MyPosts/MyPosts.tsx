import React, {KeyboardEvent} from "react";
import Post from "./Posts/Post";
import s from './MyPosts.module.css';
import {postDataType} from "../../../AllTypes";
import {updateNewPostText} from "../../../Redux/State";

type myPostsPropsType = {
    postData: Array<postDataType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

function MyPosts(props: myPostsPropsType) {
    const postsElements = props.postData.map(p => {
        return (
            <Post
                key={p.id}
                id={p.id}
                message={p.message}
                likesCount={p.likesCount}
            />
        );
    })

    let newPostElement: React.RefObject<any> = React.createRef();
    const addPost = () => {
            props.addPost();
    }
    const onEnterAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addPost();
        }
    }

    const onPostChange = () => {
        props.updateNewPostText(newPostElement.current.value)
    }


    return (
        <div className={s.wrapper}>
            <div className={s.newPost}>
                <textarea
                    ref={newPostElement}
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