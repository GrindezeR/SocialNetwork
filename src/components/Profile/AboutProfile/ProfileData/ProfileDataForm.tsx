import React from "react";
import s from "./ProfileData.module.css";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import workYes from "../../../../common/images/workYes.png";
import workNo from "../../../../common/images/workNo.png";
import {ProfileType} from "../../../../Redux/Profile-reducer";

type ProfileDataProps = {
    profile: ProfileType
    status: string
    updateProfileStatus: (status: string) => void
}

export const ProfileDataForm = ({profile, status, updateProfileStatus}: ProfileDataProps) => {

    return (
        <div>
            <button>Submit Changes</button>
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
                {/*{contactList}*/}
            </ul>
        </div>
    );
}