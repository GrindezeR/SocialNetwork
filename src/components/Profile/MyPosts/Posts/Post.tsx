import React from "react";
import s from './Post.module.css';
import avatarPost from '../../../../images/avatar.jpg'
import {PostDataType} from "../../../../Redux/Profile-reducer";

function Post(props: PostDataType) {
    return (
        <div className={s.post}>
            <div className={s.messagePost}>
                <div className={s.likeWrapper}>
                    <img className={s.profileAvatar} src={avatarPost} alt={'Avatar'}/>
                    <div className={s.like}>Like</div>
                    <div className={s.countLike}>{props.likesCount}</div>
                </div>
                <div className={s.bubbleWrapper}>
                    <div className={s.angle}/>
                    <span className={s.messageText}>{props.message}</span>
                </div>
            </div>

        </div>
    );
}

export default Post;