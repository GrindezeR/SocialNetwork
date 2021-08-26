import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route component={Dialogs} path={'/dialogs'}/>
                    <Route component={Profile} path={'/profile'}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
