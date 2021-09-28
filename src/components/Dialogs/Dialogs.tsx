import React, {ChangeEvent, KeyboardEvent} from "react";
import s from './Dialogs.module.css';
import Messages from "./Message/Message";
import DialogItem from "./DialigItem/DialogsItem";
import {actionsTypes, dialogsMessagesDataType, dialogsNamesDataType} from "../../AllTypes";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Dialogs-reducer";

type dialogsPropsType = {
    state: {
        dialogsNamesData: Array<dialogsNamesDataType>
        dialogsMessagesData: Array<dialogsMessagesDataType>
        newMessageText: string
    }
    dispatch: (action: actionsTypes) => void
}

function Dialogs(props: dialogsPropsType) {
    const dialogsElements = props.state.dialogsNamesData.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.state.dialogsMessagesData.map(m => <Messages key={m.id} id={m.id} message={m.message}/>)
    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }
    const onEnterAddMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addMessage();
        }
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));
    }

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogItems}>
                <span>{dialogsElements}</span>
            </div>

            <div className={s.messages}>
                <div>
                    <span>{messagesElements}</span>
                </div>
                <div className={s.messageSendWrapper}>
                    <textarea
                        placeholder={'Type your message'}
                        className={s.textarea}
                        onKeyPress={onEnterAddMessage}
                        onChange={onMessageChange}
                        value={props.state.newMessageText}/>
                    <button
                        className={s.submitBtn}
                        onClick={addMessage}>Send
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;