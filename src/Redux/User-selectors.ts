import {AppStateType} from "./Redux-store";
import {createSelector} from "reselect";
import {UsersType} from "./User-reducer";

export const getUsersSelector = (state: AppStateType) => state.usersPage.users
export const getPageLimitSelector = (state: AppStateType) => state.usersPage.pageLimit
export const getPageSizeSelector = (state: AppStateType) => state.usersPage.pageLimit
export const getTotalCountSelector = (state: AppStateType) => state.usersPage.totalUsersCount
export const getCurrentPageSelector = (state: AppStateType) => state.usersPage.currentPage
export const getFollowingInProgressSelector = (state: AppStateType) => state.usersPage.followingInProgress
export const getIsFetchingSelector = (state: AppStateType) => state.usersPage.isFetching

//Пример селектора через библиотеку reselect
// export const getUsersSuper = createSelector([getUsersSelector], (users: UsersType[]) => {
//     users.filter(u => true)
// })