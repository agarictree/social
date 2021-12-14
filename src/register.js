import React from "react";
import { logIn, registerAction } from "./actions";
import { useNavigate } from "react-router";

export default function RegisterPage(props) {
    let store = props.store;
    let dispatch = store.dispatch;
    let navigate = useNavigate();
    
    function registerFormHandler(e) {
        let target = e.target;
        let name = target.querySelector("#name").value;
        let surname = target.querySelector("#surname").value;
        let login = target.querySelector("#login").value;
        let email = target.querySelector("#email").value;
        let age = target.querySelector("#age").value;
        let pass = target.querySelector("#pass").value;
        let sexInput = document.getElementsByName("sex");
        let sex;
        for (const radioBtn of sexInput) {
            if(radioBtn.checked == true) {
                sex = radioBtn.value;
            }
        }

        let obj = {
            name,
            surname,
            login,
            email,
            age,
            pass,
            sex
        }
        localStorage.setItem(login, JSON.stringify(obj));
        dispatch(registerAction(obj));
        dispatch(logIn(login));
        navigate("/account");
        window.location.reload();
    }
    return (
        <section>
            <h1>Register page</h1>
            <form action="/" className="register_form" onSubmit={registerFormHandler}>
                <div className="input_block">
                    <label htmlFor="name">Enter first name</label>
                    <input type="text" id="name" required/>
                </div>
                <div className="input_block">
                    <label htmlFor="sex">Sex</label>
                    <div className="radioButtons___container">
                        <div className="radioButtons___container_block">
                            <input type="radio" name="sex" id="female" value="female"/>
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className="radioButtons___container_block">
                            <input type="radio" name="sex" id="male" value="male"/>
                            <label htmlFor="male">Male</label>
                        </div>

                    </div>
                </div>
                <div className="input_block">
                    <label htmlFor="surname">Enter last name</label>
                    <input type="text" id="surname"/>
                </div>
                <div className="input_block">
                    <label htmlFor="login">Enter login</label>
                    <input type="text" id="login" required/>
                </div>
                <div className="input_block">
                    <label htmlFor="email">Enter email</label>
                    <input type="email" id="email" required/>
                </div>
                <div className="input_block">
                    <label htmlFor="age">Enter your age</label>
                    <input type="number" id="age" required/>
                </div>
                <div className="input_block">
                    <label htmlFor="pass">Enter password</label>
                    <input type="password" id="pass" required/>
                </div>

                <button type="submit">Register now</button>
            </form>
        </section>
    )
}