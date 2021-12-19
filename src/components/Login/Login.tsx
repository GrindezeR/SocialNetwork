import React from "react";
import s from './Login.module.css';
import {LoginForm} from "./LoginForm";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {Redirect} from "react-router-dom";

export const Login = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);

    if (isAuth) {
        return (
            <Redirect to={'/profile'}/>
        );
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title}>Login to Social Network</div>
            <LoginForm/>
            <div className={s.infoAccount}>
                <span>Free Account Data:</span>
                <span>Email: free@samuraijs.com</span>
                <span>Password: free</span>
            </div>
        </div>
    );
}

