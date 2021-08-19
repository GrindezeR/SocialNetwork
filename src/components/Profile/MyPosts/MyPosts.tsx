import React from "react";
import Post from "./Posts/Post";
import style from './MyPosts.module.css';


function MyPosts() {
    return (
        <div className={style.wrapper}>
            <div className={style.newPost}>
                <textarea className={style.textArea} placeholder={'Type your post'}/>
                <button className={style.submitButton} type={'submit'}>Submit</button>
            </div>

            <Post message={'Hello Everyone!'} LikesCount={15}/>
            <Post message={'Good day.'} LikesCount={20}/>
        </div>
    );
}

export default MyPosts;