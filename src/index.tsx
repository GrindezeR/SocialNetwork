import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {store} from "./Redux/Redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
    </BrowserRouter>, document.getElementById('root')
);



