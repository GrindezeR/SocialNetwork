import React from "react";
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import noAvatar from '../../../common/images/noAvatar.png';
import {UsersType} from "../../../Redux/User-reducer";

type UserPropsType = {
    user: UsersType
    followingUsers: (userId: number) => void
    unfollowingUsers: (userId: number) => void
    followingInProgress: number[]
}

export const User = ({user, followingUsers, unfollowingUsers, followingInProgress}: UserPropsType) => {
    const onClickFollowHandler = () => followingUsers(user.id);
    const onClickUnfollowHandler = () => unfollowingUsers(user.id);

    const followingButton = user.followed ?
        <button disabled={followingInProgress.some(id => id === user.id)}
                onClick={onClickUnfollowHandler}
                className={s.unfollowBtn}>Unfollow</button>
        :
        <button disabled={followingInProgress.some(id => id === user.id)}
                onClick={onClickFollowHandler}
                className={s.followBtn}>Follow</button>

    return (
        <div className={s.userWrapper}>
            <div className={s.avatarWrapper}>
                <NavLink to={`/profile/${user.id}`}>
                    <img className={s.avatar}
                         src={user.photos.small ? user.photos.small : noAvatar}
                         alt="avatar"/>
                </NavLink>
                {followingButton}
            </div>
            <div className={s.userDataWrapper}>
                <span className={s.name}>{user.name}</span>
                <span className={s.location}>u.location.country</span>
                <span className={s.location}>u.location.city</span>
                <span className={s.statusMessage}>{user.status}</span>
            </div>
        </div>
    );
}