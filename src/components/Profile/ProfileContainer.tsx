import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {Preloader} from "../../common/Preloader/Preloader";
import {getProfileStatus, getUsersProfile, ProfileType, updateProfileStatus} from "../../Redux/Profile-reducer";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<withRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            // userId = '20102';
            userId = this.props.authUserId.toString();
        }
        this.props.getUsersProfile(userId);
        this.props.getProfileStatus(userId);
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
type withRouterPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: ProfileType,
    status: string,
    authUserId: number,
}

type mapDispatchToPropsType = {
    getUsersProfile: (userId: string) => void
    getProfileStatus: (userId: string) => void
    updateProfileStatus: (status: string) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)