import React from "react";
import s from './Profile.module.css';
import wallpaper from '../../images/profileWallpaper.jpg';
import MyPosts from "./MyPosts/MyPosts";
import AboutProfile from "./AboutProfile/AboutProfile";
import {postDataType} from "./MyPosts/Posts/Post";

type profilePropsType = {
    state: {
        postData: Array<postDataType>
    }
}

function Profile(props:profilePropsType) {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileWallpaper} src={wallpaper} alt={'profileWallpaper'}/>
            </div>
            <AboutProfile
                name={' Tsarkov Stas '}
                dateBirth={' 17 august '}
                city={' Saint-Petersburg '}
                education={' Future Frontend Developer '}
                webSite={' http://weqshar.ru '}
            />
            <MyPosts postData={props.state.postData}/>
        </div>
    );
}

export default Profile;