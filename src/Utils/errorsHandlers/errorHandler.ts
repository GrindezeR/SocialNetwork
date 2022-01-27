import {Dispatch} from "redux";
import {AppActionsTypes} from "../../Redux/Redux-store";

export const ErrorHandler = (dispatch: Dispatch,
                             action: (error: string) => AppActionsTypes,
                             error: string, timeOut: number) => {
    dispatch(action(error))
    setTimeout(() => {
        dispatch(action(''));
    }, timeOut)
}