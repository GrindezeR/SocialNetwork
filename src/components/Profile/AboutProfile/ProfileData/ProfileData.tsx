import {ContactsType, ProfileType} from "../../../../Redux/Profile-reducer";
import s from "./ProfileData.module.css";
import React from "react";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import {ProfileContacts} from "../ProfileContacts/ProfileContacts";

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
                    <span className={s.value}>Looking for job:</span>
                    {profile.lookingForAJob ? 'Yes' : 'No'}
                </li>
                {
                    profile.lookingForAJob &&
                    <li className={s.title}>
                        <span className={s.value}>Description for job:</span> {profile.lookingForAJobDescription}
                    </li>
                }
                <li className={s.value}>Contacts:</li>
                <ul>{contactList}</ul>
            </ul>
        </>
    );
}