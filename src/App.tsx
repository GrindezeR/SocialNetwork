import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Redirect, Route, Switch} from "react-router-dom";
import {stateType} from "./AllTypes";

type appPropsType = {
    state: stateType
    addPost: () => void
    addMessage: () => void
    updateNewPostText: (text: string) => void
    updateNewMessageText: (text: string) => void
}

function App(props: appPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation state={props.state}/>
            <div className="app-wrapper-content">
                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                <Route exact render={() => <Profile state={props.state}
                                                    addPost={props.addPost}
                                                    updateNewPostText={props.updateNewPostText}/>} path={'/profile'}/>

                <Route render={() => <Dialogs
                    state={props.state.dialogsPage}
                    addMessage={props.addMessage}
                    updateNewMessageText={props.updateNewMessageText}
                />} path={'/dialogs'}/>
            </div>
        </div>

    );
}

export default App;
