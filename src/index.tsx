import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import state, {addMessage, addPost, updateNewMessageText, updateNewPostText, subscribe} from "./Redux/State";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}
                     updateNewMessageText={updateNewMessageText}/>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree();
subscribe(rerenderEntireTree);


