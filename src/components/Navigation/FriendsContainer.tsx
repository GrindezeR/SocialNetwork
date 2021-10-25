import {connect} from "react-redux";
import Friends from "./Friends";
import {AppStateType} from "../../Redux/Redux-store";
import {Dispatch} from "redux";
import {friendsType} from "../../Redux/Sidebar-reducer";

export type FriendsPropsType = mapStateToProps & mapDispatchToProps

type mapStateToProps = {
    friends: friendsType[]
}

type mapDispatchToProps = {}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        friends: state.sideBar
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
    return {}
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);