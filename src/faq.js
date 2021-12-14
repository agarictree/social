import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import FAQpage from "./FAQpage";


export default function FAQ(props) {
    let loc = useLocation();
    console.log(loc);
    return (
        <section>
            <h1>FAQ</h1>
            <ul>
                <li>
                    <Link to="/FAQ/howToAdd">How to add a property into list</Link>
                </li>
                <li>
                    <Link to="/FAQ/garanties">Quaranties</Link>
                </li>
            </ul>
            <FAQpage />
            {/* <Outlet /> */}
        </section>
    )
}