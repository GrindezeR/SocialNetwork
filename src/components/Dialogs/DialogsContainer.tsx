import Dialogs from "./Dialogs";
import {
    addMessage,
    dialogsMessagesDataType,
    dialogsNamesDataType,
    updateNewMessageText,
} from "../../Redux/Dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/Redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {ComponentType} from "react";

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    dialogsNamesData: dialogsNamesDataType[]
    dialogsMessagesData: dialogsMessagesDataType[]
    newMessageText: string
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
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => dispatch(addMessage()),
        onMessageChange: (text: string) => dispatch(updateNewMessageText(text))
    }
}

// Compose позволяет нам собрать все обертки\HOC's вместе и обернуть целевую компоненту,
// важна последовательность, на данном примере - возьми Dialogs и передай в withAuthRedirect,
// далее возьми ее результат и передай в connect, т.е. распутываем снизу вверх
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs) as ComponentType

