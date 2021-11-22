import Dialogs from "./Dialogs";
import {
    addMessage,
    dialogsMessagesDataType,
    dialogsNamesDataType,
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
}

type MapDispatchPropsType = {
    addMessage: (newMessage: string) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsNamesData: state.dialogsPage.dialogsNamesData,
        dialogsMessagesData: state.dialogsPage.dialogsMessagesData,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: (newMessageText: string) => dispatch(addMessage(newMessageText)),
    }
}

// Compose позволяет нам собрать все обертки\HOC's вместе и обернуть целевую компоненту,
// важна последовательность, на данном примере - возьми Dialogs и передай в withAuthRedirect,
// далее возьми ее результат и передай в connect, т.е. распутываем снизу вверх
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs) as ComponentType

