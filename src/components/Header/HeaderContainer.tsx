import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {authUser} from "../../Redux/Auth-reducer";


class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        this.props.authUser();
    }

    render() {
        return <Header {...this.props}/>;
    }
}

export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

type mapDispatchToPropsType = {
    authUser: () => void
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {authUser})(HeaderContainer);