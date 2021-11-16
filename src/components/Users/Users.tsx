import React from "react";
import s from "./Users.module.css";
import avatarMan from "../../images/avatarMan.png";
import avatarWoman from "../../images/avatarWoman.png";
import {UsersType} from "../../Redux/User-reducer";
import {NavLink} from 'react-router-dom';

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
    let pageCounts = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];

    // // Google Pagination
    // let pageLimit = 10;
    // let startPage = props.currentPage - pageLimit / 2;
    // let endPage = props.currentPage + pageLimit / 2;
    //
    // if (startPage < 1) {
    //     startPage = 1;
    //     endPage = pageLimit;
    // }
    //
    // if (endPage > pageCounts) {
    //     endPage = pageCounts;
    //     startPage = pageCounts - pageLimit;
    // }
    //
    // for (let i = startPage; i <= endPage; i++) {
    //     pages.push(i);
    // }

    for (let i = 1; i <= pageCounts; i++) {
        pages.push(i);
    }


    const pageList = pages.map(n => {
        const onClickGetUsersByPage = () => props.getUsers(n);

        return (
            <span key={n} className={props.currentPage === n ? s.currentPage : s.page}
                  onClick={onClickGetUsersByPage}>
                    {n}
                </span>
        );
    })

    const usersList = props.users.map(u => {
        const onClickFollowHandler = () => {
            props.followingUsers(u.id);
        }

        const onClickUnfollowHandler = () => {
            props.unfollowingUsers(u.id);
        }

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

    //Functions Buttons
    const firstPageHandler = () => props.getUsers(1);
    const lastPageHandler = () => props.getUsers(pageCounts);
    const nextPageHandler = () => props.getUsers(props.currentPage + 1);
    const previousPageHandler = () => props.getUsers(props.currentPage - 1);

    //COMPLETE JSX
    return (
        <div>
            <div className={s.pagesWrapper}>
                <span className={s.page} onClick={firstPageHandler}>{'<<'}</span>
                <span className={s.page} onClick={previousPageHandler}>{'<'}</span>
                <div className={s.pageList}>{pageList}</div>
                <span className={s.page} onClick={nextPageHandler}>{'>'}</span>
                <span className={s.page} onClick={lastPageHandler}>{'>>'}</span>
            </div>
            {usersList}
        </div>
    );
}