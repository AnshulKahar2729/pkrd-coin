import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./store";
import "react-toastify/dist/ReactToastify.css";



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <ToastContainer autoClose={2000} style={{ zIndex: 10000 }} />
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
);
