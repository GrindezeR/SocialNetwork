import React from "react";
import s from './Profile.module.css';
import wallpaper from '../../images/profileWallpaper.jpg';
import MyPosts from "./MyPosts/MyPosts";
import AboutProfile from "./AboutProfile/AboutProfile";
import {postDataType} from "../../AllTypes";
import {updateNewPostText} from "../../Redux/State";

type profilePropsType = {
    state: {
        postData: Array<postDataType>
        newPostText: string
    }
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
                education={' Future Frontend Developer '}
                webSite={' http://weqshar.ru '}
            />
            <MyPosts postData={props.state.postData} addPost={props.addPost} newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;