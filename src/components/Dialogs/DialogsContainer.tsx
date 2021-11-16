import Dialogs from "./Dialogs";
import {
    addMessage,
    dialogsMessagesDataType,
    dialogsNamesDataType,
    updateNewMessageText,
} from "../../Redux/Dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {Dispatch} from "redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    dialogsNamesData: dialogsNamesDataType[]
    dialogsMessagesData: dialogsMessagesDataType[]
    newMessageText: string
    isAuth: boolean
}

type MapDispatchPropsType = {
    addMessage: () => void
    onMessageChange: (text: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsNamesData: state.dialogsPage.dialogsNamesData,
        dialogsMessagesData: state.dialogsPage.dialogsMessagesData,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.auth.isAuth,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => dispatch(addMessage()),
        onMessageChange: (text: string) => dispatch(updateNewMessageText(text))
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs));