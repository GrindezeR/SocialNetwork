import React from "react";
import s from "./UsersPresentation.module.css";
import avatarMan from "../../images/avatarMan.png";
import avatarWoman from "../../images/avatarWoman.png";
import {UsersType} from "../../Redux/User-reducer";

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

    //Check
    let pageLimit = 10;
    let startPage = props.currentPage - pageLimit / 2; //-4
    let endPage = props.currentPage + pageLimit / 2; //6

    if (startPage < 1) { //-4 < 1
        startPage = 1;
        endPage = pageLimit; //10
    }

    if (endPage > pageCounts) {
        endPage = pageCounts;
        startPage = pageCounts - pageLimit;
    }

    // 1, 1 <= 10
    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    // for (let i = 1; i <= pageCounts; i++) {
    //     pages.push(i);
    // }


    const pageList = pages.map(n => {
        return (
            <span className={props.currentPage === n ? s.currentPage : s.page}
                  onClick={() => props.getUsers(n)}>{n}</span>
        );
    })

    const usersList = props.users.map(u => {
        const onClickFollowHandler = () => props.followToggle(u.id);
        return (
            <div key={Math.random()} className={s.wrapper}>
                <div className={s.avatarWrapper}>
                    <img className={s.avatar}
                         src={u.photos.small ? u.photos.small : (u.id % 2 === 0 ? avatarMan : avatarWoman)}
                         alt="avatar"/>
                    {
                        u.followed ?
                            <button onClick={onClickFollowHandler} className={s.followBtn}>Follow</button>
                            :
                            <button onClick={onClickFollowHandler} className={s.unfollowBtn}>Unfollow</button>
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