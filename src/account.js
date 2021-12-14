import React, { useEffect } from "react";
import { loadPhotoAction } from "./actions";

export default function Account(props) {
    let store = props.store;
    let login = localStorage.getItem("login");
    let info = JSON.parse(localStorage.getItem(login));
    let pic = localStorage.getItem(`${login}-avatar`);

    function loadImg(e) {
        let target = e.target;
        let file = target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            dispatch(loadPhotoAction(reader.result));
            localStorage.setItem(`${login}-avatar`, reader.result);
        }

    }
    
    return (
        <section className="accountPage__container">
            <h1>Your account page</h1>
            <section className="avatar__container">
                {pic ? <>
                <p>Your avatar</p>
                <img src={pic} alt="your avatar" />
                </>
                : <><div className="avatar__container_fileLoader">
                    <label htmlFor="photo">Select a photo</label>
                    <input type="file" id="photo" onChange={loadImg}/>
                </div>
                </>
            }
            </section>
            <p>Login: {login}</p>
            <p>Name: {info.name ? info.name : "name is empty."}</p>
            <p>Surname: {info.surname ? info.surname : "surname is empty."}</p>
            <p>Age: {info.age ? info.age : "age is empty."}</p>
            <p>Email: {info.email ? info.email : "email is empty."}</p>
            <p>Password: {info.pass ? info.pass : "pass is empty."}</p>
            <p>Sex: {info.sex ? info.sex : "sex is empty."}</p>
            <p>Site: {info.site ? info.site : "site is empty."}</p>
        </section>
    )
}