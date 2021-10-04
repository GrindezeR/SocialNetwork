import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import {Redirect, Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>

            <div className="app-wrapper-content">
                <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                <Route exact render={() => <Profile/>} path={'/profile'}/>
                <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
            </div>
        </div>
    );
}

export default App;
