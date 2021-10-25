import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {Redirect, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>

            <div className="app-wrapper-content">
                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                <Route exact render={() => <ProfileContainer/>} path={'/profile'}/>
                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                <Route render={() => <UsersContainer/>} path={'/users'}/>
            </div>
        </div>
    );
}

export default App;
