import React from "react";
import Post from "./Posts/Post";
import s from './MyPosts.module.css';
import {postDataType} from "../../../AllTypes";

type myPostsPropsType = {
    postData: Array<postDataType>
    addPost: (message:string) => void
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

    let newPostElement:React.RefObject<any> = React.createRef();
    const addPost = () => {
        props.addPost(newPostElement.current.value);
        newPostElement.current.value = '';
        console.log(props.postData)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.newPost}>
                <textarea
                    ref={newPostElement}
                    className={s.textArea}
                    placeholder={'Type your post'}
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