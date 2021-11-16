import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import Profile from "./Profile";
import {Preloader} from "../Preloader/Preloader";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUsersProfile, ProfileType} from "../../Redux/Profile-reducer";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";


class ProfileContainer extends React.Component<withRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '20102';
        }
        this.props.getUsersProfile(userId);
    }

    render() {
        // if (!this.props.isAuth) {
        //     return <Redirect to={'/login'}/>
        // }

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
    profile: ProfileType | null
    // isAuth: boolean
}

type mapDispatchToPropsType = {
    getUsersProfile: (userId: string) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        // isAuth: state.auth.isAuth,
    }
}

const WithURLComponent = withRouter(withAuthRedirect(ProfileContainer));
export default connect(mapStateToProps, {getUsersProfile})(WithURLComponent)