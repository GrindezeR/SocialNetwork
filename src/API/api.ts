import axios from "axios";
import {UsersType} from "../Redux/User-reducer";
import {ProfileType} from "../Redux/Profile-reducer";


type GetUsersType = {
    items: UsersType[]
    totalCount: number
}
type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: ResultCode,
}

export enum ResultCode {
    Success = 0,
    Error = 1,
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
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageLimit}`)
            .then(res => res.data)
    },
    setFollow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`, {})
            .then(res => res.data)
    },
    setUnfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
            .then(res => res.data)
    },
}

export const authAPI = {
    me() {
        return instance.get<ResponseType<{ id: number, email: string, login: string }>>
        (`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, remember: boolean) {
        return instance.post<ResponseType<{ userId: number }>>
        (`auth/login`, {email: email, password: password, rememberMe: remember,})
            .then(res => res.data)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(res => res.data)
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
        return instance.put<ResponseType>(`profile/status`, {status: newStatus})
            .then(res => res.data)
    }
}