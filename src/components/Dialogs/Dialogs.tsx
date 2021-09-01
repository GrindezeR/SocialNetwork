import React from "react";
import s from './Dialogs.module.css';
import Messages from "./Message/Message";
import DialogItem from "./DialigItem/DialogsItem";

type dialogsPropsType = {
    state: {
        dialogsNamesData: Array<dialogsNamesDataType>
        dialogsMessagesData: Array<dialogsMessagesDataType>
    }
}

export type dialogsNamesDataType = {
    id: string
    name: string
}

export type dialogsMessagesDataType = {
    id: string
    message: string
}

function Dialogs(props: dialogsPropsType) {
    const dialogsElements = props.state.dialogsNamesData.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messagesElements = props.state.dialogsMessagesData.map(m => <Messages id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogItems}>
                <span>{dialogsElements}</span>
            </div>

            <div className={s.messages}>
                <div>
                    <span>{messagesElements}</span>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;