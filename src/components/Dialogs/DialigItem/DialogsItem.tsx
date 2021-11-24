import React from "react";
import {NavLink} from "react-router-dom";
import avatar from '../../../images/dialogAvatar.png'
import {dialogsNamesDataType} from "../../../Redux/Dialogs-reducer";
import s from './DialogsItem.module.css';

function DialogItem(props: dialogsNamesDataType) {
    return (
        <NavLink className={s.wrapper} to={`/dialogs/${props.id}`}>
            <img src={avatar} alt={'dialogAvatar'}/>
            <span>{props.name}</span>
        </NavLink>
    );
}

export default DialogItem;