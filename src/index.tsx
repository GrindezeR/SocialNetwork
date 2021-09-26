import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import store from "./Redux/State";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={store.getState()}
                     addPost={store.addPost.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     updateNewMessageText={store.updateNewMessageText.bind(store)}/>
            </React.StrictMode>,
        </BrowserRouter>, document.getElementById('root')
    );
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree();


