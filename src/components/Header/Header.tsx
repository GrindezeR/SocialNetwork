import React from "react";
import s from './Header.module.css';
import logo from '../../common/images/logo.png'
import {NavLink} from 'react-router-dom'
import {HeaderPropsType} from "./HeaderContainer";
import sc from '../../common/styles/commonStyles.module.css';

export const Header = (props: HeaderPropsType) => {

    return (
        <header className={s.header}>
            <img src={logo} alt={'logo'}/>
            <div className={s.loginWrapper}>
                {
                    props.isAuth ?
                        <React.Fragment>
                            {props.login}
                            <NavLink className={s.login} to={'/login'}>
                                <button className={sc.button} onClick={props.logout}>Log out</button>
                            </NavLink>
                        </React.Fragment>
                        :
                        <NavLink className={s.login} to={'/login'}>
                            <button className={sc.button}>Login</button>
                        </NavLink>
                }
            </div>
        </header>
    );
}