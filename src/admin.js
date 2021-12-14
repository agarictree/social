import React, { useEffect, useState } from "react";

export default function Admin(props) {
    let store = props.store;
    let login = localStorage.getItem("login");
    let list = localStorage.getItem("adminList").split(",");
    let arr = [];
    let total = "";
    list.map(el => {
        
        if(el.startsWith("{")) {
            total = total + el + ",";
        } else {
            total+=el;
            arr.push(total);
            total = "";
        }
    });
    console.log(arr);
    let [isAdmin, setState] = useState(false);
    useEffect(() => {
        if(login == "admin") {
            setState(true);
        } else {
            setState(false);
        }
    })
    return (
        <section>
       {isAdmin ? 
        <>
        <h1>Admin page</h1>
        {
            arr ? <ul>{
            arr.map(elem => {
                let obj = JSON.parse(elem);
                return (
                    <li>
                        <p>Name: {obj.login}, date: {obj.time}</p>
                    </li>
                )
            })}</ul> : <p>Empty.</p>
        }
        </>
        : <h1>Not enough rights.</h1>}
        </section>
    )
}