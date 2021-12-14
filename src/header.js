import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Connected } from "./index";

export default function Header(props) {
    let nameStr = props.store.getState().login_item.login_item;
    let [isLoggedSuccess, setState] = useState(false);
    let [isAdmin, setAdminPage] = useState(false);
    let itemname = localStorage.getItem("login");
    let photo = localStorage.getItem(`${itemname}-avatar`);
    useEffect(() => {
        if(itemname !== "Anonym" && itemname) {
            setState(true);
        } else {
            setState(false);
        }

        if(itemname == "admin") {
            setAdminPage(true);
        } else {
            setAdminPage(false);
        }
        
    })
    return (
        <header>
        <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/list" element={<Connected/>}>List</NavLink></li>
            <li><NavLink to="/FAQ">FAQ</NavLink></li>
            <li><NavLink to="/contacts">Contacts</NavLink></li>
            <li>{isLoggedSuccess ? <NavLink to="/logout">Log out</NavLink>: <NavLink to="/login">Log in</NavLink>}</li>
            {isAdmin ? <li><NavLink to="/admin">Admin page</NavLink></li> : null}
            {itemname && !isAdmin && itemname !== "Anonym" ? <li><NavLink to="/account">Your account</NavLink></li> : null}
            {itemname == "Anonym" ? <li><NavLink to="/register">Register</NavLink></li> : null}
        </ul>
        </nav>
        <div className="welcome">
            <p id="name">Hello, {itemname}!</p>
            {photo ? <img src={photo}/> : <img src="img/anon_avatar.jpg" alt="no avatar"/>}
        </div>
        </header>
    )
}

