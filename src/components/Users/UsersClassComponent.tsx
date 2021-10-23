import React from "react";
import {UsersPropsType} from "./UsersContainer";
import s from "./Users.module.css";
import avatarMan from "../../images/avatarMan.png";
import avatarWoman from "../../images/avatarWoman.png";
import axios from "axios";
import {initialStateType} from "../../Redux/User-reducer";


export class UsersClassComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios
            .get<initialStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    getUsers = (page: number) => {
        axios
            .get<initialStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
        this.props.setCurrentPage(page);
    }

    render() {
        const pageCounts = Math.ceil(this.props.totalCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pageCounts; i++) {
            pages.push(i);
        }

        const pageList = pages.map(n => {
            return (
                <span className={this.props.currentPage === n ? s.currentPage : s.page}
                      onClick={() => this.getUsers(n)}>{n}</span>
            );
        })


        const usersList = this.props.users.map(u => {
            const onClickFollowHandler = () => this.props.followToggle(u.id);
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


        return (
            <div>
                <div className={s.pagesWrapper}>
                    {pageList}
                </div>
                {usersList}
                <button className={s.showMoreBtn}
                        onClick={() => alert('SHOW MORE')}>
                    Show People
                </button>
            </div>
        );
    }
}