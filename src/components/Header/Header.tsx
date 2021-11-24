import React from "react";
import s from './Header.module.css';
import logo from '../../images/logo.svg'
import {NavLink} from 'react-router-dom'
import {HeaderPropsType} from "./HeaderContainer";

export const Header = (props: HeaderPropsType) => {

    return (
        <header className={s.header}>
            <img src={logo} alt={'logo'}/>
            <div className={s.loginWrapper}>
                {
                    props.isAuth ?
                        <>
                            {props.login}
                            <NavLink className={s.login} to={'/login'}>
                                <button className={s.logBtn} onClick={props.logout}>Log out</button>
                            </NavLink>
                        </>
                        :
                        <NavLink className={s.login} to={'/login'}>
                            <button className={s.logBtn}>Login</button>
                        </NavLink>
                }
            </div>
        </header>
    );
}