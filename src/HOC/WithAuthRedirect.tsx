import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/Redux-store";
import {Redirect} from "react-router-dom";

type MstpType = {
    isAuth: boolean
}
// Создаем HOC чтобы не писать в каждой компоненте проверку на авторизацию,
// просто оборачиваем нужные компоненты в данный HOC
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