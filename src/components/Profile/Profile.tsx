import React from "react";
import style from './Profile.module.css';
import wallpaper from '../../images/profileWallpaper.jpg';
import MyPosts from "./MyPosts/MyPosts";
import AboutProfile from "./AboutProfile/AboutProfile";

function Profile() {
    return (
        <div className={style.profile}>
            <div>
                <img className={style.profileWallpaper} src={wallpaper} alt={'profileWallpaper'}/>
            </div>
            <AboutProfile
                name={' Tsarkov Stas '}
                dateBirth={' 17 august '}
                city={' Saint-Petersburg '}
                education={' Future Frontend Developer '}
                webSite={' http://weqshar.ru '}
            />
            <MyPosts/>
        </div>
    );
}

export default Profile;