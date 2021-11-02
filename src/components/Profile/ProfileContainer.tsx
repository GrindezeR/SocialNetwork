import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {ProfileType, setUsersProfile} from "../../Redux/Profile-reducer";
import Profile from "./Profile";
import axios from "axios";
import {Preloader} from "../Preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";


class ProfileContainer extends React.Component<withRouterPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = '20102';
        }
        axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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
type withRouterPropsType = RouteComponentProps<PathParamsType> & ProfilePropsType;

type PathParamsType = {
    userId: string
}

type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchToPropsType = {
    setUsersProfile: (profile: ProfileType) => void
}

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
    }
}

const WithURLComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUsersProfile})(WithURLComponent)