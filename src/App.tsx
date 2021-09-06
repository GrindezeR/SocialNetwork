import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {stateType} from "./AllTypes";

type appPropsType = {
    state: stateType
    addPost: (message:string) => void
    addMessage: (message:string) => void
}

function App(props: appPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navigation state={props.state}/>
                <div className="app-wrapper-content">
                    <Route render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>} path={'/profile'}/>
                    <Route render={() => <Dialogs state={props.state.dialogsPage} addMessage={props.addMessage}/>} path={'/dialogs'}/>
                </div>
            </div>

    );
}

export default App;
