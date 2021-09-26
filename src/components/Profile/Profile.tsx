import React from "react";
import s from './Profile.module.css';
import wallpaper from '../../images/profileWallpaper.jpg';
import MyPosts from "./MyPosts/MyPosts";
import AboutProfile from "./AboutProfile/AboutProfile";
import {stateType} from "../../AllTypes";

type profilePropsType = {
    state: stateType
    addPost: () => void
    updateNewPostText: (text: string) => void
}

function Profile(props: profilePropsType) {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.profileWallpaper} src={wallpaper} alt={'profileWallpaper'}/>
            </div>
            <AboutProfile
                name={' Tsarkov Stas '}
                dateBirth={' 17 august '}
                city={' Saint-Petersburg '}
                education={' Frontend Developer '}
                webSite={' http://weqshar.ru '}
            />
            <MyPosts postData={props.state.profilePage.postData} addPost={props.addPost}
                     newPostText={props.state.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;