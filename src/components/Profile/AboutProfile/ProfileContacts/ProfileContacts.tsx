import React from "react";
import s from "./ProfileContacts.module.css";

type PropsType = {
    title: string
    value: string
}

export const ProfileContacts = ({title, value}: PropsType) => {
    return (
        <li className={s.title}>
            <span className={s.value}>{title}:</span> {value}
        </li>
    );
}