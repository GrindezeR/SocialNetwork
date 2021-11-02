import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {setAuthUserData} from "../../Redux/Auth-reducer";
import axios from "axios";

type AxiosResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: string[]
}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        axios.get<AxiosResponseType>('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
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
    setAuthUserData: (id: number, email: string, login: string) => void
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);