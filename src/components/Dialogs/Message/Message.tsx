import React from "react";
import avatar from '../../../common/images/avatar.webp';
import style from './Message.module.css';
import {dialogsMessagesDataType} from "../../../Redux/Dialogs-reducer";

function Messages(props: dialogsMessagesDataType) {
    return (
        <div className={style.wrapper}>
            <div className={style.avatar}>
                <img src={avatar} alt={'avatar'}/>
            </div>
            <div className={style.angle}/>
            <div className={style.message}>
                {/*<div className={style.name}>{props.name}</div>*/}
                <span className={style.text}>{props.message}</span>
                {/*<div className={style.time}>{props.time}</div>*/}
            </div>
        </div>
    );

}

export default Messages;