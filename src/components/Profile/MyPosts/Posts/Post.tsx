import React from "react";
import s from './Post.module.css';
import avatarPost from '../../../../images/avatar.jpg'

export type postDataType = {
    id: string
    message: string
    likesCount: number
}

function Post(props: postDataType) {
    return (
        <div className={s.post}>
            <div className={s.messagePost}>
                <img className={s.profileAvatar} src={avatarPost} alt={'Avatar'}/>
                <span className={s.messageText}>{props.message}</span>
            </div>
            <div>
                <span className={s.like}>Like</span>
            </div>
            <div>
                <span className={s.countLike}>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;