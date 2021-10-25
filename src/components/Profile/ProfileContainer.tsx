import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {InitialStateType, ProfileType, setUsersProfile} from "../../Redux/Profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import {Preloader} from "../Preloader/Preloader";


class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data);
            });
    }

    render() {
        return (
            <>
                {!this.props.profile && <Preloader/>}
                <Profile {...this.props}/>
            </>
        );
    }
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = InitialStateType

type mapDispatchToPropsType = {
    setUsersProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer)