import React from "react";
import s from './Login.module.css';
import {LoginForm} from "./LoginForm";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";

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
        </div>
    );
}

