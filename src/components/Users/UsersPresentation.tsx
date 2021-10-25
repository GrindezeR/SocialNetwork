import React from "react";
import s from "./UsersPresentation.module.css";
import avatarMan from "../../images/avatarMan.png";
import avatarWoman from "../../images/avatarWoman.png";
import {UsersType} from "../../Redux/User-reducer";
import {NavLink} from 'react-router-dom';

type UsersPresentationPropsType = {
    users: UsersType[]
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followToggle: (userId: number) => void
    getUsers: (number: number) => void
}

export const UsersPresentation = (props: UsersPresentationPropsType) => {
    const pageCounts = Math.ceil(props.totalCount / props.pageSize);
    const pages = [];

    //Google Pagination
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
    //     if (pages[pageLimit] === props.currentPage) pages.length = pages.length - 1
    // }

    for (let i = 1; i <= pageCounts; i++) {
        pages.push(i);
    }


    const pageList = pages.map(n => {
        return (
            <span key={n}
                  className={props.currentPage === n ? s.currentPage : s.page}
                  onClick={() => props.getUsers(n)}>{n}
            </span>
        );
    })

    const usersList = props.users.map(u => {
        const onClickFollowHandler = () => props.followToggle(u.id);
        return (
            <div key={Math.random()} className={s.wrapper}>
                <div className={s.avatarWrapper}>
                    <NavLink to={`/profile/${u.id}`}>
                        <img className={s.avatar}
                             src={u.photos.small ? u.photos.small : (u.id % 2 === 0 ? avatarMan : avatarWoman)}
                             alt="avatar"/>
                    </NavLink>
                    {
                        u.followed ?
                            <button onClick={onClickFollowHandler} className={s.unfollowBtn}>Unfollow</button>
                            :
                            <button onClick={onClickFollowHandler} className={s.followBtn}>Follow</button>
                    }
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

    //COMPLETE JSX
    return (
        <div>
            <div className={s.pagesWrapper}>
                {pageList}
            </div>
            {usersList}
            {/*<button className={s.showMoreBtn}*/}
            {/*        onClick={() => alert('SHOW MORE')}>*/}
            {/*    Show People*/}
            {/*</button>*/}
        </div>
    );
}