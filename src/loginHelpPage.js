import React from "react";
import { useNavigate } from "react-router";
import { addToAdminList, adminAction, getDataFrom, logIn, registerAction, userAction } from "./actions";

export default function LoginHelpPage(props) {
    let store = props.store;
    let navigate = useNavigate();
    let dispatch = store.dispatch;

    function onsubmitSecretHandler(e) {
       
        let field = e.target.previousElementSibling;

        if(field.value == "admin") {
            localStorage.setItem("login", "admin");
            dispatch(adminAction());
            navigate("/admin");
            window.location.reload();
        }
        if(field.value && field.value != "admin") {
            let list = localStorage.getItem("adminList");
            console.log(list);
            if(list.length == 0) {
                localStorage.setItem("adminList", JSON.stringify({login: field.value, time: new Date()}));
            } else {
                let arr = [];
                arr.push(list);
                arr.push(JSON.stringify({login: field.value, time: new Date()}));
                localStorage.setItem("adminList", arr);
            }
            
            dispatch(addToAdminList(localStorage.getItem("adminList")));
            localStorage.setItem("login", field.value);
            dispatch(logIn(field.value));
            navigate("/account");
            window.location.reload();
        }
        
    }
    return (
        <section>
            <h1>Log in to your account</h1>
            <form action="/" >
                <label htmlFor="pass">Enter login here</label>
                <input type="text" name="" id="login" />
                <button type="button" onClick={onsubmitSecretHandler}>Enter!</button>
            </form>
        </section>
    )
}