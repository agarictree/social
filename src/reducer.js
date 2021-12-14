
import { add, addUserToAdminList, getData, isAdmin, isUser, loadPhoto, login, logout, register } from "./actions";

let list = localStorage.getItem("adminList");

export let initState = {
    items: [],
    login_item: localStorage.getItem("login") ? localStorage.getItem("login") : "Anonym",
    info: {},
    adminList: list ? list : []
};

export function listReducer(state = initState.items, action) {
    switch (action.type) {
        case add:
            return {...state, items: state.items.concat(action.payload)};
        default:
            return state;
    }
}

export function loginReducer(state = initState.login_item, action) {
    console.log(state, "reducer is working");
    switch (action.type) {
        case logout:
            return {login_item: "Anonym"};
        case isAdmin:
            return {login_item: action.payload};
        case isUser:
            return {login_item: action.payload};
        case login: 
            return {login_item: action.payload};
        case getData: 
            return {info: action.payload}
    }
    return state;
}

export function registerReducer(state = initState.info, action) {
    switch (action.type) {
        case register:
            return {...state, info: action.payload};
        case loadPhoto:
            return {...state, photo: action.payload};
    
        default:
            return state;
    }
}
export function adminReducer(state = initState.adminList, action) {
    switch (action.type) {
        case addUserToAdminList:
            return {adminList: state.concat(action.payload)};
    
        default:
            return state;
    }
}