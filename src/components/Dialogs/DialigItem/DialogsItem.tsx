import React from "react";
import {NavLink} from "react-router-dom";
import avatar from '../../../images/dialogAvatar.png'
import {dialogsNamesDataType} from "../../../AllTypes";


function DialogItem(props: dialogsNamesDataType) {
    return (
        <div>
            <NavLink to={`/dialogs/${props.id}`}>
                <img src={avatar} alt={'dialogAvatar'}/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    );
}

export default DialogItem;