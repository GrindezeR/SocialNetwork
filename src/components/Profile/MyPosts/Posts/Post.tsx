import React from "react";
import s from './Post.module.css';
import noAvatar from '../../../../common/images/noAvatar.png';
import {PostDataType} from "../../../../Redux/Profile-reducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../Redux/Redux-store";

function Post(props: PostDataType) {
    const avatar = useSelector<AppStateType, string>(state => state.profilePage.profile.photos.small);

    return (
        <div className={s.post}>
            <div className={s.messagePost}>
                <div className={s.likeWrapper}>
                    <img className={s.profileAvatar} src={avatar || noAvatar} alt={'Avatar'}/>
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