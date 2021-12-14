export const add = "ADD_ITEM";
export const login = "LOG_IN";
export const logout = "LOG_OUT";
export const isAdmin = "IS_ADMIN";
export const isUser = "IS_USER";
export const register = "REGISTER_NEW_USER";
export const loadPhoto = "LOAD_PHOTO";
export const addUserToAdminList = "ADD_USER_TO_ADMIN_LIST";
export const getData = "GET_DATA";

export function add_item(item) {
    return {
        type: add,
        payload: item
    }
}
export function logIn(str) {
    return {
        type: login,
        payload: str
    }
}
export function logOut() {
    return {
        type: logout
    }
}
export function adminAction() {
    console.log("admin action is working");
    return {
        type: isAdmin,
        payload: "admin"
    }
}
export function userAction(str) {
    console.log("user action is working");
    return {
        type: isUser,
        payload: str
    }
}
export function registerAction(info) {
    return {
        type: register,
        payload: info
    }
}
export function loadPhotoAction(url) {
    return {
        type: loadPhoto,
        payload: url
    }
}
export function addToAdminList(user) {
    return {
        type: addUserToAdminList,
        payload: user
    }
}
export function getDataFrom(data) {
    return {
        type: getData,
        payload: data
    }
}