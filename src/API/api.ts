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
type AxiosUpdateStatusType = {
    resultCode: 0 | 1
}

type AxiosAuthoriseResponseType<T> = {
    resultCode: 0 | 1,
    data: T
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
}

export const authAPI = {
    //Залогинены ли мы?
    me() {
        return instance.get<AxiosAuthType>(`auth/me`)
            .then(res => res.data)
    },

    login(email: string, password: string, remember: boolean) {
        return instance.post<AxiosAuthoriseResponseType<{ userId: number }>>(`auth/login`, {
            email: email,
            password: password,
            rememberMe: remember,
        })
    },

    logout() {
        return instance.delete<AxiosAuthoriseResponseType<{}>>(`auth/login`)
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },

    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
    },

    setStatus(newStatus: string) {
        return instance.put<AxiosUpdateStatusType>(`profile/status`, {status: newStatus})
            .then(res => res.data)
    }
}