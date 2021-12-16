import React, {Component} from 'react';
import './App.css';
import Navigation from "./Navigation/Navigation";
import {Redirect, Route} from "react-router-dom";
import DialogsContainer from "./Dialogs/DialogsContainer";
import UsersContainer from "./Users/UsersContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import HeaderContainer from "./Header/HeaderContainer";
import {Login} from "./Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "../Redux/App-reducer";
import {AppStateType} from "../Redux/Redux-store";
import {Preloader} from "../common/Preloader/Preloader";

class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                {this.props.loading && <Preloader/>}
                <HeaderContainer/>
                <Navigation/>

                <div className="app-wrapper-content">
                    <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                    <Route render={() => <ProfileContainer/>} path={'/profile/:userId?'}/>
                    <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                    <Route render={() => <UsersContainer/>} path={'/users'}/>
                    <Route render={() => <Login/>} path={'/login'}/>
                </div>
            </div>
        );
    }
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    initialized: boolean
    loading: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized,
        loading: state.app.loading,
    }
}


export default connect(MapStateToProps, {initializeApp})(App)