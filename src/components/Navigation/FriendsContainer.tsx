import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {AppStateType} from "../../Redux/Redux-store";
import {Dispatch} from "redux";
import {friendsType} from "../../Redux/Sidebar-reducer";

export type FriendsPropsType = mapStateToProps & mapDespatchToProps

type mapStateToProps = {
    friends: friendsType[]
}

type mapDespatchToProps = {}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        friends: state.sideBar
    }
}

const mapDespatchToProps = (dispatch:Dispatch): mapDespatchToProps => {
  return {}
}

export const FriendsContainer = connect(mapStateToProps, mapDespatchToProps)(Friends);