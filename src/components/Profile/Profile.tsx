import React from "react";
import s from './Profile.module.css';
import wallpaper from '../../images/profileWallpaper.jpg';
import AboutProfile from "./AboutProfile/AboutProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

function Profile(props: ProfilePropsType) {
    return props.profile && (
        <div className={s.profile}>
            <div>
                <img className={s.profileWallpaper} src={wallpaper} alt={'profileWallpaper'}/>
            </div>

            <AboutProfile profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;