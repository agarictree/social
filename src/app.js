import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from "redux";
import Header from "./header";
import "./styles.css";
import { adminReducer, listReducer, loginReducer, registerReducer } from "./reducer";
import RouterComponent from "./router";
import { connect } from "react-redux";
import { adminAction, logOut, userAction , logIn } from "./actions";
import Footer from "./footer";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";

let middleware = createSagaMiddleware();

let store = createStore(combineReducers({items: listReducer, login_item: loginReducer, info: registerReducer, adminList: adminReducer}), applyMiddleware(middleware));
console.log(store.getState());

function App(props) {
    let login = localStorage.getItem("login");
    let adminList = localStorage.getItem("adminList", []);
    useEffect(() => {
    //     if(login == "admin") {
    //         localStorage.setItem("login", "admin");
    //     }
    //     if(login && login !== "admin") {
    //         localStorage.setItem("login", store.getState().login_item);
    //     }
    //     if(info) {
    //         localStorage.setItem(login, JSON.stringify(info));
    //     }
    if(!adminList) {
        localStorage.setItem("adminList", []);
    }
    if(!login) {
        localStorage.setItem("login", store.getState().login_item);
    }
    }, []);
    return (
        <main className="main_container">
            <Header store={store}/>
            <RouterComponent store={store}/>
            <Footer />
        </main>
    )
}

let mapDispatchToProps = (dispatch) => {
    return {
        logIn: (str) => {
            dispatch(logIn(str));
        },
        logOut: () => {
            dispatch(logOut());
        },
        adminAction: () => {
            dispatch(adminAction());
        },
        userAction: (login) => {
            dispatch(userAction(login));
        }
    }
}

let mapStateToProps = store => {
    return {
        login_item: store.login_item
    }
}

let Body = connect(mapStateToProps, mapDispatchToProps)(App);

middleware.run(rootSaga);

ReactDOM.render(<HashRouter>
    <Provider store={store}>
        <Body/>
    </Provider>
</HashRouter>
    , document.getElementById("root"))