import React from "react";
import s from './Profile.module.css';
import wallpaper from '../../images/profileWallpaper.jpg';
import AboutProfile from "./AboutProfile/AboutProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

function Profile() {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileWallpaper} src={wallpaper} alt={'profileWallpaper'}/>
            </div>

            <AboutProfile
                name={' Tsarkov Stas '}
                dateBirth={' 17 august '}
                city={' Saint-Petersburg '}
                education={' Frontend '}
                webSite={' http://weqshar.ru '}/>

            <MyPostsContainer/>
        </div>
    );
}

export default Profile;