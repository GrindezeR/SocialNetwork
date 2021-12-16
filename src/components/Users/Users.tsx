import React from "react";
import s from "./Users.module.css";
import avatarMan from "../../common/images/avatarMan.png";
import avatarWoman from "../../common/images/avatarWoman.png";
import {UsersType} from "../../Redux/User-reducer";
import {NavLink} from 'react-router-dom';
import {Paginator} from "../../common/Paginator/Paginator";

type UsersPropsType = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    followingInProgress: number[]
    getUsers: (number: number) => void
    followingUsers: (userId: number) => void
    unfollowingUsers: (userId: number) => void
}


export const Users = (props: UsersPropsType) => {
    const usersList = props.users.map(u => {
        const onClickFollowHandler = () => props.followingUsers(u.id);
        const onClickUnfollowHandler = () => props.unfollowingUsers(u.id);

        const followingButton = u.followed ?
            <button disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={onClickUnfollowHandler}
                    className={s.unfollowBtn}>Unfollow</button>
            :
            <button disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={onClickFollowHandler}
                    className={s.followBtn}>Follow</button>

        return (
            <div key={Math.random()} className={s.wrapper}>
                <div className={s.avatarWrapper}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img className={s.avatar}
                             src={u.photos.small ?
                                 u.photos.small : (u.id % 2 === 0 ? avatarMan : avatarWoman)}
                             alt="avatar"/>
                    </NavLink>
                    {followingButton}
                </div>
                <div className={s.userWrapper}>
                    <span className={s.name}>{u.name}</span>
                    <span className={s.location}>u.location.country</span>
                    <span className={s.location}>u.location.city</span>
                    <span className={s.statusMessage}>{u.status}</span>
                </div>
            </div>
        );
    })


    return (
        <div>
            <Paginator totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage}
                       getUsers={props.getUsers}/>
            {usersList}
        </div>
    );
}