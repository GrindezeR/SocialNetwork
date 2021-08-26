import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import avatar from '../../images/dialogAvatar.png'

type dialogItemType = {
    id: number
    name: string
}

type messageType = {
    id: number
    message: string
}

function Dialogs() {

    let dialogsPersoneData: Array<dialogItemType> = [
        {id: 1, name: 'Stas'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Yulia'},
        {id: 4, name: 'Keris'},
        {id: 5, name: 'Egor'},
    ]

    let messageDta: Array<messageType> = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Lets go!'},
        {id: 4, message: 'Hi all!'},
        {id: 5, message: 'Its work...'},
    ]

    const allDialogs = dialogsPersoneData.map(d => {
        return (
            <div className={style.dialog}>
                <NavLink to={`/dialogs/${d.id}`}><img src={avatar} alt={'dialogAvatar'}/>{d.name}</NavLink>
            </div>
        );
    })

    const allMessages = messageDta.map(m => {
        return (
            <div className={style.message}>{m.message}</div>
        );
    })


    return (
        <div className={style.dialogsWrapper}>

            <div className={style.dialogItems}>
                <div>{allDialogs}</div>
            </div>

            <div className={style.messages}>
                <div>{allMessages}</div>
                {/*<Messages message={'Hello!'}/>*/}
                {/*<Messages message={'Yo!'}/>*/}
                {/*<Messages message={'Whats up?'}/>*/}
            </div>

        </div>
    );
}

// function DialogItem(props: dialogItemType) {
//     let path = `/dialogs/${props.id}`;
//
//
//     return (
//         <div className={style.dialog}>
//             <NavLink to={path}><img src={avatar} alt={'dialogAvatar'}/>{props.name}</NavLink>
//         </div>
//     );
// }

// function Messages(props: messageType) {
//     return (
//         <div className={style.message}>{props.message}</div>
//     );
// }

export default Dialogs;