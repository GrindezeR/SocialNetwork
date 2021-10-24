import React from "react";
import s from './UsersPresentation.module.css';
import {UsersPropsType} from "./UsersContainer";
import axios from 'axios';
import avatarMan from "../../images/avatarMan.png";
import avatarWoman from "../../images/avatarWoman.png";
import {initialStateType} from "../../Redux/User-reducer";

export function Users({users, followToggle, setUsers}: UsersPropsType) {
    const usersList = users.map(u => {
        const onClickFollowHandler = () => followToggle(u.id);
        return (
            <div key={u.id} className={s.wrapper}>
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

    const onClickShowMoreHandler = () => {
        if (users.length === 0) {
            axios.get<initialStateType>('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => setUsers(response.data.items));
        }
    }

    // const onClickShowMoreHandler = () => {
    //     setUsers([
    //         {
    //             id: v1(),
    //             userName: 'Stas T.',
    //             statusMessage: 'Hello! Im Good, how are you?',
    //             avatar: avatarMan,
    //             location: {
    //                 counry: 'Russia',
    //                 city: 'Dubna',
    //             },
    //             follow: false
    //         },
    //         {
    //             id: v1(),
    //             userName: 'Yulia T.',
    //             statusMessage: 'Good morning!',
    //             avatar: avatarWoman,
    //             location: {
    //                 counry: 'Belarus',
    //                 city: 'Minsk',
    //             },
    //             follow: true
    //         }
    //     ])
    // }


    return (
        <div>
            {usersList}
            <button className={s.showMoreBtn}
                    onClick={onClickShowMoreHandler}>
                Show More
            </button>
        </div>
    );
}