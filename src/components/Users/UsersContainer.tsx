import React from "react";
import {connect} from "react-redux";
import {
    ActionTypes,
    followToggleAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    UsersType
} from "../../Redux/User-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../Redux/Redux-store";
import {UsersClassComponent} from "./UsersClassComponent";
import {Users} from "./Users";

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

type mapStateToPropsType = {
    users: UsersType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
}

type mapDispatchToPropsType = {
    followToggle: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (number: number) => void
    setTotalUsersCount: (number: number) => void
}

//Second
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
    }
}

//Third
const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): mapDispatchToPropsType => {
    return {
        followToggle: (userId: number) => {
            dispatch(followToggleAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (number: number) => {
            dispatch(setCurrentPageAC(number));
        },
        setTotalUsersCount: (number: number) => {
            dispatch(setTotalUsersCountAC(number));
        }
    }
}

//First
export default connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)