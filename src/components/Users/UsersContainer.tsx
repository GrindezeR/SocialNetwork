import {connect} from "react-redux";
import {
    followToggle,
    InitialStateType,
    setCurrentPage,
    setFetching,
    setTotalUsersCount,
    setUsers,
    UsersType
} from "../../Redux/User-reducer";
import {AppStateType} from "../../Redux/Redux-store";
import React from "react";
import axios from "axios";
import {UsersPresentation} from "./UsersPresentation";
import {Preloader} from "../Preloader/Preloader";


let allUsers: number;

//Container for API requests
export class UsersClassComponentAPI extends React.Component<UsersPropsType> {
    componentDidMount() {

        this.props.setFetching(true);
        axios
            .get<InitialStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                // this.props.setTotalUsersCount(response.data.totalCount); //Too many users
                allUsers = response.data.totalCount;
                this.props.setFetching(false);
            });
    }

    getUsers = (page: number) => {
        this.props.setFetching(true);
        axios
            .get<InitialStateType>(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setFetching(false);
            });
        this.props.setCurrentPage(page);
    }

    render() {
        return (
            <>
                <div style={{textAlign: 'center', fontWeight: 'bold'}}>Total users: {allUsers}</div>
                {this.props.isFetching && <Preloader/>}
                <UsersPresentation users={this.props.users}
                                   totalCount={this.props.totalCount}
                                   pageSize={this.props.pageSize}
                                   currentPage={this.props.currentPage}
                                   followToggle={this.props.followToggle}
                                   getUsers={this.getUsers}
                                   isFetching={this.props.isFetching}/>

            </>
        );
    }
}


export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;
type mapStateToPropsType = {
    users: UsersType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
}
type mapDispatchToPropsType = {
    followToggle: (userId: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (number: number) => void
    setTotalUsersCount: (number: number) => void
    setFetching: (status: boolean) => void
}


//Second
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

//Third
// const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>): mapDispatchToPropsType => {
//     return {
//         followToggle: (userId: number) => {
//             dispatch(followToggleAC(userId))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (number: number) => {
//             dispatch(setCurrentPageAC(number));
//         },
//         setTotalUsersCount: (number: number) => {
//             dispatch(setTotalUsersCountAC(number));
//         },
//         setFetching: (status: boolean) => {
//             dispatch(setFetchingAC(status));
//         }
//     }
// }

//First
export default connect(mapStateToProps, {
    followToggle,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
})(UsersClassComponentAPI)