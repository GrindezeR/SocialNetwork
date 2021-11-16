import axios from "axios";
import {UsersType} from "../Redux/User-reducer";
import {ProfileType} from "../Redux/Profile-reducer";

type AxiosGetUsersType = {
    items: UsersType[]
    totalCount: number
}

type AxiosFollowType = {
    resultCode: number
}

export type AxiosAuthType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: string[]
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '761e6f2b-b609-440b-9ec5-0bbc9398cba5',
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageLimit: number) {
        return instance.get<AxiosGetUsersType>(`users?page=${currentPage}&count=${pageLimit}`)
            .then(res => res.data)
    },
    setFollow(userId: number) {
        return instance.post<AxiosFollowType>(`follow/${userId}`, {})
            .then(res => res.data)
    },
    setUnfollow(userId: number) {
        return instance.delete<AxiosFollowType>(`follow/${userId}`)
            .then(res => res.data)
    },
    getUserProfile(userId: string) {
        return instance.get<ProfileType>(`/profile/${userId}`)
            .then(res => res.data)
    }
}

export const authAPI = {
    authMe() {
        return instance.get<AxiosAuthType>(`auth/me`)
            .then(res => res.data)
    },
}