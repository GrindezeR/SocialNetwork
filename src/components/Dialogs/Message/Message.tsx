import React from "react";
import {dialogsMessagesDataType} from "../Dialogs";
import avatar from '../../../images/avatar.jpg';
import style from './Message.module.css';

function Messages(props:dialogsMessagesDataType) {
    // const messageStyle = {
    //     margin: '15px',
    // }
    return(
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

        //start
        // <div style={messageStyle}>
        //     <span>{props.message}</span>
        // </div>
    );

}

export default Messages;