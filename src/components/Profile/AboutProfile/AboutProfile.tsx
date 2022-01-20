import React, {ChangeEvent, useState} from "react";
import noAvatar from '../../../common/images/noAvatar.png';
import s from './AboutProfile.module.css';
import {ProfileType, setProfileError} from "../../../Redux/Profile-reducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";

type AboutProfileType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateProfileStatus: (status: string) => void
    savePhoto: (file: File) => void
}


function AboutProfile(props: AboutProfileType) {
    let {profile, status, isOwner, savePhoto, updateProfileStatus} = props
    const error = useSelector<AppStateType, string>(state => state.profilePage.error);
    const dispatch = useDispatch();

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0]);
        }
        dispatch(setProfileError(''));
    }
    const [editMode, setEditMode] = useState(false);

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
                {editMode ?
                    <ProfileDataForm profile={profile} updateProfileStatus={updateProfileStatus} status={status}/> :
                    <ProfileData profile={profile} updateProfileStatus={updateProfileStatus} status={status}/>}
                {isOwner && <button onClick={() => setEditMode(!editMode)}>Edit Information</button>}
            </div>
        </div>
    );
}


export default AboutProfile;