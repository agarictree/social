import {take, put} from "@redux-saga/core/effects";
import { getData } from "./actions";

export function* rootSaga() {
    yield watcherSaga();
}
async function getUser() {
    let login = localStorage.getItem("login");
    let responce = await fetch("https://jsonplaceholder.typicode.com/users");
    let result =  responce.json();
    let obj;
        result.forEach(elem => {
            if(login == elem.username) {
                let arr = elem.name.split(" ");
                let name = arr[0];
                let surname = arr[1];
                obj = {
                    login: elem.username,
                    email: elem.email,
                    name,
                    surname,
                    site: elem.website
                };
                localStorage.setItem(field.value, JSON.stringify(obj));
            }
    });
    return obj;
}
export function* workerSaga() {
    let data = getUser();
    yield put({type: getData, payload: data});
}
export function* watcherSaga() {
    yield take(getData, workerSaga);
}