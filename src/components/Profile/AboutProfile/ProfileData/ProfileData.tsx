import {ContactsType, ProfileType} from "../../../../Redux/Profile-reducer";
import s from "./ProfileData.module.css";
import workYes from "../../../../common/images/workYes.png";
import workNo from "../../../../common/images/workNo.png";
import React from "react";
import {ProfileContacts} from "../ProfileContacts/ProfileContacts";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";

type ProfileDataProps = {
    profile: ProfileType
    status: string
    updateProfileStatus: (status: string) => void
}

export const ProfileData = ({profile, status, updateProfileStatus}: ProfileDataProps) => {
    const contactList = Object.keys(profile.contacts).map(key => {
        return <ProfileContacts key={key} title={key} value={profile.contacts[key as keyof ContactsType]}/>
    })

    return (
        <>
            <div className={s.name}>
                {profile.fullName}
                <ProfileStatus status={status} updateProfileStatus={updateProfileStatus}/>
            </div>
            <ul>
                <li className={s.title}>
                    <span className={s.value}>About Me:</span> {profile.aboutMe}
                </li>
                <li className={s.title}>
                        <span className={s.value}>
                            Looking for job:
                        </span>
                    <img src={profile.lookingForAJob ? workYes : workNo} width={'20px'} alt="job"/>
                </li>
                {
                    profile.lookingForAJob &&
                    <li className={s.title}>
                        <span className={s.value}>Description for job:</span> {profile.lookingForAJobDescription}
                    </li>
                }
                {contactList}
            </ul>
        </>
    );
}