import React from "react";
import avatar from '../../../common/images/avatar.webp';
import s from './AboutProfile.module.css';
import {ProfileType} from "../../../Redux/Profile-reducer";
import workYes from '../../../common/images/workYes.png';
import workNo from '../../../common/images/workNo.png';
import {ProfileStatus} from "./ProfileStatus";

type AboutProfileType = {
    profile: ProfileType
    status: string
    updateProfileStatus: (status: string) => void
}


function AboutProfile(props: AboutProfileType) {
    let {profile, status} = props

    return (
        <div className={s.wrapper}>
            <div>
                <img className={s.profileAvatar}
                     src={profile.photos.large ? profile.photos.large : avatar}
                     alt={'Avatar'}/>
            </div>
            <div>
                <div className={s.name}>
                    {profile.fullName}
                    <ProfileStatus status={status}
                                   updateProfileStatus={props.updateProfileStatus}/>
                </div>

                <ul>
                    <li className={s.li}>
                        <span>About Me:</span> {profile.aboutMe}
                    </li>
                    <li className={s.li}>
                        <span>
                            Looking for job:
                        </span>
                        <img src={profile.lookingForAJob ? workYes : workNo} width={'20px'} alt="job"/>
                    </li>
                    <li className={s.li}>
                        <span>Description for job:</span> {profile.lookingForAJobDescription}
                    </li>
                    <li className={s.li}>
                        <span>VK:</span> {profile.contacts.vk}
                    </li>
                    <li className={s.li}>
                        <span>Facebook:</span> {profile.contacts.facebook}
                    </li>
                    <li className={s.li}>
                        <span>Website:</span> {profile.contacts.website}
                    </li>
                    <li className={s.li}>
                        <span>Twitter:</span> {profile.contacts.twitter}
                    </li>
                    <li className={s.li}>
                        <span>Instagram:</span> {profile.contacts.instagram}
                    </li>
                    <li className={s.li}>
                        <span>Youtube:</span> {profile.contacts.youtube}
                    </li>
                    <li className={s.li}>
                        <span>GitHub:</span> {profile.contacts.github}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutProfile;