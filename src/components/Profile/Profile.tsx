import React from "react";
import s from './Profile.module.css';
import AboutProfile from "./AboutProfile/AboutProfile";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfilePropsType} from "./ProfileContainer";

function Profile(props: ProfilePropsType) {
    return (
        <div className={s.profileWallpaper}>
            <AboutProfile profile={props.profile}
                          updateProfileStatus={props.updateProfileStatus}
                          status={props.status}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;