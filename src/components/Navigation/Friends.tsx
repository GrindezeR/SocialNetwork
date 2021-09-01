import React from "react";
import s from './Friends.module.css';
import {friendsType} from "../../Redux/State";

type friendsPropsType = {
    friends: Array<friendsType>
}

function Friends(props: friendsPropsType) {
    const friendList = props.friends.map(f => {
        return (
            <div>
                <img className={s.avatar} src={f.avatar} alt={'avatar'}/>
                <span>{f.name}</span>
            </div>
        );
    })

    return (
        <div className={s.friendWrapper}>
            <span className={s.friends}>Friends</span>
            <div className={s.friendListWrapper}>
                {friendList}
            </div>
        </div>
    );
}

export default Friends;