import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {Preloader} from "../../common/Preloader/Preloader";
import {
    getProfileStatus,
    getUsersProfile,
    ProfileType,
    savePhoto, ProfileFormDataType, updateProfileData,
    updateProfileStatus
} from "../../Redux/Profile-reducer";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import Profile from "./Profile";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<withRouterPropsType> {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId.toString();
        }
        this.props.getUsersProfile(userId);
        this.props.getProfileStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps: Readonly<withRouterPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <>
                {!this.props.profile && <Preloader/>}
                <Profile {...this.props}
                         isOwner={!this.props.match.params.userId}
                         savePhoto={this.props.savePhoto}
                         // updateProfileData={this.props.updateProfileData}
                />
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
    isOwner: boolean,
}

type mapDispatchToPropsType = {
    getUsersProfile: (userId: string) => void
    getProfileStatus: (userId: string) => void
    updateProfileStatus: (status: string) => void
    savePhoto: (file: File) => void
    updateProfileData: (profileData: ProfileFormDataType) => Promise<{}>
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authUserId: state.auth.userId,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUsersProfile, getProfileStatus, updateProfileStatus, savePhoto, updateProfileData}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)