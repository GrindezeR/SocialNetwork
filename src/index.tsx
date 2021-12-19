import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import React from "react";
import App from "./components/App";
import {store} from "./Redux/Redux-store";
import {Provider} from "react-redux";


ReactDOM.render(
    <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
    </HashRouter>, document.getElementById('root')
);



