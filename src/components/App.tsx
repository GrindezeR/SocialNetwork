import React, {Component, Suspense} from 'react';
import './App.css';
import Navigation from "./Navigation/Navigation";
import {Redirect, Route, Switch} from "react-router-dom";
import HeaderContainer from "./Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "../Redux/App-reducer";
import {AppStateType} from "../Redux/Redux-store";
import {Preloader} from "../common/Preloader/Preloader";
import {ErrorPage} from "./ErrorPage/ErrorPage";

const DialogsContainer = React.lazy(() => import('./Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./Users/UsersContainer'));
const Login = React.lazy(() => import('./Login/Login'));


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
                    <Suspense fallback={<Preloader type={"circle"}/>}>
                        <Switch>
                            <Route render={() => <ProfileContainer/>} path={'/profile/:userId?'}/>
                            <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                            <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
                            <Route render={() => <UsersContainer/>} path={'/users'}/>
                            <Route render={() => <Login/>} path={'/login'}/>
                            <Route render={() => <ErrorPage/>} path={'*'}/>
                        </Switch>
                    </Suspense>
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