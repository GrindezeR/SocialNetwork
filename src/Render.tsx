import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {stateType} from "./AllTypes";
import {addMessage, addPost} from "./Redux/State";


export const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} addMessage={addMessage}/>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
}