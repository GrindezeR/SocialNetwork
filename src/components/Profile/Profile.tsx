import React from "react";
import s from './Profile.module.css';
import wallpaper from '../../images/profileWallpaper.jpg';
import MyPosts from "./MyPosts/MyPosts";
import AboutProfile from "./AboutProfile/AboutProfile";
import {actionsTypes, postDataType, stateType} from "../../AllTypes";

type profilePropsType = {
    state: {
        postData: postDataType[]
        newPostText: string
    }
    dispatch: (action: actionsTypes) => void
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
            <MyPosts postData={props.state.postData}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}
            />
        </div>
    );
}

export default Profile;