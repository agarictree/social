import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { logOut } from "./actions";

export default function Logout(props) {
    let store = props.store;
    let navigate = useNavigate();
    function exit(e) {
        store.dispatch(logOut());
        localStorage.removeItem("login");
        navigate("/");
        window.location.reload();
    }
    // function logoutButtonHandler(e) {
    //     let colors = ["seashell", "rosybrown", "lightsalmon", "darksalmon", "lightcoral", "coral", "tomato", "indianred", "crimson", "seashell"];
    //     let target = e.target;
    //     let color = getComputedStyle(target).backgroundColor;
    //     colors.map(elem => {
    //         if(elem == color) {
    //             setTimeout(() => {
    //                 target.style.backgroundColor = elem
    //             })
    //         }
    //     })
    // }
    return (
        <section className="logout_container">
            <h1>Logout page</h1>
            <button id="logout" onClick={exit} className="logout_button">Exit</button>
        </section>
    )
}