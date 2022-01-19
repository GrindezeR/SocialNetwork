import React from "react";
import Post from "./Posts/Post";
import s from './MyPosts.module.css';
import {MyPostsPropsType} from "./MyPostsContainer";
import {MyPostsForm} from "./MyPostsForm";

function MyPosts(props: MyPostsPropsType) {
    const postsElements = props.postsData.map(p => {
        return (
            <Post key={p.id}
                  id={p.id}
                  message={p.message}
                  likesCount={p.likesCount}
            />
        );
    })

    return (
        <div className={s.wrapper}>
            <MyPostsForm addPost={props.addPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;