import React, { useEffect } from "react";

export default function Home() {
    function downloadfile(e) {
        let target = e.target;
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
            let img = target.nextElementSibling;
            img.src = reader.result;
            localStorage.setItem("img", reader.result);
        }
    }
    return (
        <section className="home_main">
            <h1>Home</h1>
        </section>
    )
}