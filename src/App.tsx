import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Redirect, Route} from "react-router-dom";
import {actionsTypes, stateType} from "./AllTypes";

type appPropsType = {
    state: stateType
    dispatch: (action: actionsTypes) => void
}

function App(props: appPropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation state={props.state}/>

            <div className="app-wrapper-content">
                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>

                <Route exact render={() =>
                    <Profile state={props.state.profilePage} dispatch={props.dispatch}/>} path={'/profile'}/>

                <Route render={() =>
                    <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>} path={'/dialogs'}/>
            </div>
        </div>
    );
}

export default App;
