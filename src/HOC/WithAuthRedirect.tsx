import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/Redux-store";

type MstpType = {
    isAuth: boolean
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MstpType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }

    const mstp = (state: AppStateType): MstpType => {
        return {
            isAuth: state.auth.isAuth,
        }
    }

    return connect(mstp)(RedirectComponent)
}