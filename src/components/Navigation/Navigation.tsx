import React from "react";
import style from './Navigation.module.css';

function Navigation() {
    return(
        <div className={style.navigation}>
            <div className={style.item}><a>Profile</a></div>
            <div className={style.item}><a>Messages</a></div>
            <div className={style.item}><a>News</a></div>
            <div className={style.item}><a>Music</a></div>
            <div className={style.item}><a>Settings</a></div>
        </div>
    );
}

export default Navigation;