import React from "react";
import style from './Post.module.css';
import avatarPost from '../../../../images/avatar.jpg'

type postType = {
    message: string
    LikesCount: number
}

function Post(props: postType) {
    return (
        <div className={style.post}>
            <div className={style.messagePost}>
                <img className={style.profileAvatar} src={avatarPost} alt={'Avatar'}/>
                <span className={style.messageText}>{props.message}</span>
            </div>
            <div>
                <span className={style.like}>Like</span>
            </div>
            <div>
                <span className={style.countLike}>{props.LikesCount}</span>
            </div>
        </div>
    );
}

export default Post;