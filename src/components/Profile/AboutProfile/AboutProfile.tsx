import React, {ChangeEvent} from "react";
import noAvatar from '../../../common/images/noAvatar.png';
import s from './AboutProfile.module.css';
import {ProfileType, setProfileError} from "../../../Redux/Profile-reducer";
import workYes from '../../../common/images/workYes.png';
import workNo from '../../../common/images/workNo.png';
import {ProfileStatus} from "./ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";

type AboutProfileType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateProfileStatus: (status: string) => void
    savePhoto: (file: File) => void
}


function AboutProfile(props: AboutProfileType) {
    let {profile, status, isOwner, savePhoto} = props
    const error = useSelector<AppStateType, string>(state => state.profilePage.error);
    const dispatch = useDispatch();

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
        dispatch(setProfileError(''));
    }

    return (
        <div className={s.wrapper}>
            <div className={s.avatarWrapper}>
                <img className={s.profileAvatar}
                     src={profile.photos.large || noAvatar}
                     alt={'Avatar'}
                />
                {isOwner &&
                    <>
                        <input className={s.inputAvatar}
                               type={"file"}
                               onChange={mainPhotoSelected}/>
                        {error && <span className={s.error}>{error}</span>}
                    </>
                }
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