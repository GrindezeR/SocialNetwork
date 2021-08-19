import React from "react";
import avatar from '../../../images/avatar.jpg';
import style from './AboutProfile.module.css';

type aboutProfileType = {
    name: string
    dateBirth: string
    city: string
    education: string
    webSite: string
}

function AboutProfile(props: aboutProfileType) {
    return (
        <div className={style.wrapper}>
            <div>
                <img className={style.profileAvatar} src={avatar} alt={'Avatar'}/>
            </div>
            <div>
                <h3>{props.name}</h3>
                <ul>
                    <li><span>Date of Birth:</span>{props.dateBirth}</li>
                    <li><span>City:</span>{props.city}</li>
                    <li><span>Education:</span>{props.education}</li>
                    <li><span>Web Site:</span>{props.webSite}</li>
                </ul>
            </div>
        </div>
    );
}

export default AboutProfile;