import axios from "axios";
import {UsersType} from "../Redux/User-reducer";

type AxiosGetUsersType = {
    items: UsersType[]
    totalCount: number
}

type AxiosFollowType = {
    resultCode: number
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '761e6f2b-b609-440b-9ec5-0bbc9398cba5',
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageLimit: number) {
        return instance.get<AxiosGetUsersType>(`users?page=${currentPage}&count=${pageLimit}`)
    },
    setFollow(userId: number) {
        return instance.post<AxiosFollowType>(`follow/${userId}`, {})
    },
    setUnfollow(userId: number) {
        return instance.delete<AxiosFollowType>(`follow/${userId}`)
    },
}
