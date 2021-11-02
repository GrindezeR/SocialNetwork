import React from "react";
import s from './Header.module.css';
import logo from '../../images/logo.png'
import {NavLink} from 'react-router-dom'
import {HeaderPropsType} from "./HeaderContainer";

export const Header = (props: HeaderPropsType) => {

    return (
        <header className={s.header}>
            <img src={logo} alt={'logo'}/>
            <div className={s.loginWrapper}>
                {
                    props.isAuth ?
                        <span>{props.login}</span>
                        :
                        <NavLink to={'/auth'}>Login</NavLink>
                }
            </div>
        </header>
    );
}