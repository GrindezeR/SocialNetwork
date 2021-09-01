import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

import {stateType} from "./Redux/State";

type appPropsType = {
    // postData: Array<postDataType>
    // dialogsNamesData: Array<dialogsNamesDataType>
    // dialogsMessagesData: Array<dialogsMessagesDataType>
    state: stateType
}

function App(props: appPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation state={props.state}/>
                <div className="app-wrapper-content">
                    <Route render={() => <Profile state={props.state.profilePage}/>} path={'/profile'}/>
                    <Route render={() => <Dialogs state={props.state.dialogsPage}/>} path={'/dialogs'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
