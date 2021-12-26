import React from "react";
import {UsersType} from "../../Redux/User-reducer";
import {Paginator} from "../../common/Paginator/Paginator";
import {User} from "./User/User";

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
    const usersList = props.users.map(u =>
        <User key={u.id}
              user={u}
              followingUsers={props.followingUsers}
              unfollowingUsers={props.unfollowingUsers}
              followingInProgress={props.followingInProgress}
        />
    )


    return (
        <div>
            <Paginator totalCount={props.totalCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       getItems={props.getUsers}
            />
            {usersList}
        </div>
    );
}