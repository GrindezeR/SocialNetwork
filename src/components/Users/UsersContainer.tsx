import {connect} from "react-redux";
import {
    setFollowingInProgress,
    followToggle,
    setCurrentPage,
    setFetching,
    setTotalUsersCount,
    setUsers,
    UsersType
} from "../../Redux/User-reducer";
import {AppStateType} from "../../Redux/Redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader";
import {usersAPI} from "../../API/api";


//Container for API requests
export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageLimit).then(response => {
            this.props.setUsers(response.data.items);
            // this.props.setTotalUsersCount(response.data.totalCount); //Too many users
            this.props.setFetching(false);
        });
    }

    getUsers = (page: number) => {
        this.props.setFetching(true);

        usersAPI.getUsers(page, this.props.pageLimit).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setFetching(false);
        });
        this.props.setCurrentPage(page);
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users users={this.props.users}
                       totalCount={this.props.totalCount}
                       pageSize={this.props.pageLimit}
                       currentPage={this.props.currentPage}
                       followToggle={this.props.followToggle}
                       getUsers={this.getUsers}
                       isFetching={this.props.isFetching}
                       followingInProgress={this.props.followingInProgress}
                       setFollowingInProgress={this.props.setFollowingInProgress}
                />
            </>
        );
    }
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = {
    users: UsersType[],
    pageLimit: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}
type mapDispatchToPropsType = {
    followToggle: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (number: number) => void
    setTotalUsersCount: (number: number) => void
    setFetching: (status: boolean) => void
    setFollowingInProgress: (isLoading: boolean, userId:number) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageLimit: state.usersPage.pageLimit,
        totalCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    followToggle, setUsers,
    setCurrentPage, setTotalUsersCount, setFetching, setFollowingInProgress
})(UsersContainer)