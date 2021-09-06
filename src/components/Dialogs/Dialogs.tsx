import React from "react";
import s from './Dialogs.module.css';
import Messages from "./Message/Message";
import DialogItem from "./DialigItem/DialogsItem";
import {dialogsMessagesDataType, dialogsNamesDataType, postMessageTypeF} from "../../AllTypes";

type dialogsPropsType = {
    state: {
        dialogsNamesData: Array<dialogsNamesDataType>
        dialogsMessagesData: Array<dialogsMessagesDataType>
    }
    addMessage: (message:string) => void
}

function Dialogs(props: dialogsPropsType) {
    const dialogsElements = props.state.dialogsNamesData.map(d => <DialogItem id={d.id} name={d.name}/>)
    const messagesElements = props.state.dialogsMessagesData.map(m => <Messages id={m.id} message={m.message}/>)

    let newMessageElement: React.RefObject<any> = React.createRef();
    const addMessage = () => {
        props.addMessage(newMessageElement.current.value);
        newMessageElement.current.value = '';
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
                        ref={newMessageElement}
                    />

                    <button
                        className={s.submitBtn}
                        onClick={addMessage}>Add</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;