import s from './Dialogs.module.css';
import Messages from "./Message/Message";
import DialogItem from "./DialigItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";
import {DialogsForm} from "./DialogsForm";

function Dialogs(props: DialogsPropsType) {
    const dialogsElements = props.dialogsNamesData.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)
    const messagesElements = props.dialogsMessagesData.map(m => <Messages key={m.id} id={m.id}
                                                                          message={m.message}/>)
    // const addMessage = () => {
    //     props.addMessage();
    // }
    // const onEnterAddMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.key === 'Enter') {
    //         e.preventDefault();
    //         addMessage();
    //     }
    // }
    // const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.onMessageChange(e.currentTarget.value);
    // }

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogItems}>
                <span>{dialogsElements}</span>
            </div>

            <div className={s.messages}>
                <div>
                    <span>{messagesElements}</span>
                </div>
                <DialogsForm addMessage={props.addMessage}/>
                {/*<div className={s.messageSendWrapper}>*/}
                {/*    <textarea*/}
                {/*        placeholder={'Type your message'}*/}
                {/*        className={s.textarea}*/}
                {/*        onKeyPress={onEnterAddMessage}*/}
                {/*        onChange={onMessageChange}*/}
                {/*        value={props.newMessageText}/>*/}
                {/*    <button*/}
                {/*        className={s.submitBtn}*/}
                {/*        onClick={addMessage}>Send*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>

        </div>
    );
}


export default Dialogs;