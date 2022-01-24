import React, {ChangeEvent, useState} from "react";
import noAvatar from '../../../common/images/noAvatar.png';
import s from './AboutProfile.module.css';
import {ProfileType, setProfileError, ProfileFormDataType} from "../../../Redux/Profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm";

type AboutProfileType = {
    profile: ProfileType
    status: string
    isOwner: boolean
    updateProfileStatus: (status: string) => void
    updateProfileData: (profileData: ProfileFormDataType) => Promise<{}>
    savePhoto: (file: File) => void
}


function AboutProfile(props: AboutProfileType) {
    let {profile, status, isOwner, savePhoto, updateProfileStatus, updateProfileData} = props
    const error = useSelector<AppStateType, string>(state => state.profilePage.error);
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);

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
                        {error && <div className={s.error}>{error}</div>}
                    </>
                }
            </div>
            <div>
                {editMode ?
                    <ProfileDataForm profile={profile}
                                     setEditMode={setEditMode}
                                     updateProfileData={updateProfileData}/>
                    :
                    <ProfileData profile={profile}
                                 updateProfileStatus={updateProfileStatus}
                                 status={status}/>
                }
                {isOwner &&
                    (editMode ? <button onClick={() => setEditMode(false)}>Back</button>
                        :
                        <button onClick={() => setEditMode(!editMode)}>Edit Information</button>)
                }
            </div>
        </div>
    );
}


export default AboutProfile;