import React, {ChangeEvent, KeyboardEvent} from "react";
import Post from "./Posts/Post";
import s from './MyPosts.module.css';
import {MyPostsPropsType} from "./MyPostsContainer";

function MyPosts(props: MyPostsPropsType) {
    const postsElements = props.postsData.map(p => {
        return (
            <Post key={p.id}
                  id={p.id}
                  message={p.message}
                  likesCount={p.likesCount}/>
        );
    })

    const addPost = () => {
        props.addPost();
    }
    const onEnterAddPost = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addPost();
        }
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value);
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
                    onClick={addPost}>
                    <span>Send</span>
                </button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;