import React from "react";
import style from './Message.module.css';
import {dialogsMessagesDataType} from "../../../Redux/Dialogs-reducer";
import noAvatar from '../../../common/images/noAvatar.png';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/Redux-store";

function Messages(props: dialogsMessagesDataType) {
    const avatar = useSelector<AppStateType, string>(state => state.profilePage.profile.photos.small);

    return (
        <div className={style.wrapper}>
            <div className={style.avatar}>
                <img src={avatar || noAvatar} alt={'avatar'}/>
            </div>
            <div className={style.angle}/>
            <div className={style.message}>
                <span className={style.text}>{props.message}</span>
            </div>
        </div>
    );

}

export default Messages;