import {connect} from "react-redux";
import {
    followingUsers,
    followToggle,
    getUsers,
    setCurrentPage,
    setFollowingInProgress,
    unfollowingUsers,
    UsersType
} from "../../Redux/User-reducer";
import {AppStateType} from "../../Redux/Redux-store";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getFollowingInProgressSelector,
    getCurrentPageSelector,
    getPageLimitSelector,
    getTotalCountSelector,
    getUsersSelector, getIsFetchingSelector
} from "../../Redux/User-selectors";

export class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageLimit);
    }

    getUsers = (page: number) => {
        this.props.getUsers(page, this.props.pageLimit);
    }

    render() {
        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users users={this.props.users}
                       totalCount={this.props.totalCount}
                       pageSize={this.props.pageLimit}
                       currentPage={this.props.currentPage}
                       getUsers={this.getUsers}
                       followingInProgress={this.props.followingInProgress}
                       followingUsers={this.props.followingUsers}
                       unfollowingUsers={this.props.unfollowingUsers}
                />
            </>
        );
    }
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = {
    users: UsersType[],
    totalCount: number,
    pageLimit: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
}
type mapDispatchToPropsType = {
    setCurrentPage: (number: number) => void
    getUsers: (currentPage: number, pageLimit: number) => void
    followingUsers: (userId: number) => void
    unfollowingUsers: (userId: number) => void
}

// const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//     return {
//         users: state.usersPage.users,
//         pageLimit: state.usersPage.pageLimit,
//         totalCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: getUsersSelector(state),
        pageLimit: getPageLimitSelector(state),
        totalCount: getTotalCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
        isFetching: getIsFetchingSelector(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        followToggle, setCurrentPage, setFollowingInProgress,
        getUsers, followingUsers, unfollowingUsers
    }),
)(UsersContainer) as ComponentType