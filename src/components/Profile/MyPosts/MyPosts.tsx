import React, {ChangeEvent, useState} from "react";
import Post from "./Posts/Post";
import s from './MyPosts.module.css';
import {postDataType} from "./Posts/Post";

type myPostsPropsType = {
    postData: Array<postDataType>
}

function MyPosts(props: myPostsPropsType) {
    const postsElements = props.postData.map(p => {
        return (
            <Post
                id={p.id}
                message={p.message}
                likesCount={p.likesCount}
            />
        );
    })
    return (
        <div className={s.wrapper}>
            <div className={s.newPost}>
                <textarea
                    className={s.textArea}
                    placeholder={'Type your post'}
                />
                <button
                    className={s.submitButton}
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