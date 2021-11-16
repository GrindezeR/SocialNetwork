import React from "react";
import avatar from '../../../images/avatar.jpg';
import s from './AboutProfile.module.css';
import {ProfileType} from "../../../Redux/Profile-reducer";
import workYes from '../../../images/workYes.png';
import workNo from '../../../images/workNo.png';

type AboutProfileType = {
    profile: ProfileType
}


function AboutProfile({profile}: AboutProfileType) {

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
                    <span className={s.aboutMe}>{profile.aboutMe}</span>
                </div>

                <ul>
                    <li className={s.li}>
                        <span>
                            Looking for job:
                        </span>
                        <img src={profile.lookingForAJob ? workYes : workNo} width={'20px'} alt="job"/>
                    </li>
                    <li className={s.li}>
                        <span>Description for job:</span> {profile.lookingForAJobDescription || '-'}
                    </li>
                    <li className={s.li}>
                        <span>VK:</span> {profile.contacts.vk || '-'}
                    </li>
                    <li className={s.li}>
                        <span>Facebook:</span> {profile.contacts.facebook || '-'}
                    </li>
                    <li className={s.li}>
                        <span>Website:</span> {profile.contacts.website || '-'}
                    </li>
                    <li className={s.li}>
                        <span>Twitter:</span> {profile.contacts.twitter || '-'}
                    </li>
                    <li className={s.li}>
                        <span>Instagram:</span> {profile.contacts.instagram || '-'}
                    </li>
                    <li className={s.li}>
                        <span>Youtube:</span> {profile.contacts.youtube || '-'}
                    </li>
                    <li className={s.li}>
                        <span>GitHub:</span> {profile.contacts.github || '-'}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutProfile;