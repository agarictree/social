import React from "react";
import { Link, useSearchParams, useParams, useNavigate, useRoutes } from "react-router-dom";

export default function Contact() {
    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate();
    async function toPage(e) {
        let name = e.target.querySelector("#selectLink").value;
        e.preventDefault();
        return navigate(`/contacts/${name}`);
    }
    return (
        <section>
            <h1>Contacts</h1>
            <form action="/contacts" method="get" encType="multipart/form-data" onSubmit={toPage}>
                <label htmlFor="selectLink">Enter name</label>
                <input type="text" name="selectLink" id="selectLink" />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}