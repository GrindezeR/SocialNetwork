import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navigation.module.css';
import Friends from "./Friends";
import {friendsType} from "../../AllTypes";


type navigationPropsType = {
    state: {
        sideBar: Array<friendsType>
    }
}

function Navigation(props: navigationPropsType) {
    return (
        <div className={s.navigation}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}><NavLink to={'/dialogs'} activeClassName={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}><NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink></div>
            <div className={s.item}><NavLink to={'/music'} activeClassName={s.activeLink}>Music</NavLink></div>
            <div className={s.item}><NavLink to={'/settings'} activeClassName={s.activeLink}>Settings</NavLink></div>
            <div className={s.friends}>
                <Friends friends={props.state.sideBar}/>
            </div>
        </div>
    );
}

export default Navigation;