import React from "react";
import { useLocation , useRoutes} from "react-router-dom";
import FaqId from "./faqid";

function FaqPage() {
    let elem = useRoutes([
        {path: "/howToAdd", element: <FaqId title="How to add"/>},
        {path: "/garanties", element: <FaqId title="Quaranties" />}
    ]);
    return elem;
}

export default function FAQpage(props) {
    return (
        <section>
            <FaqPage />
        </section>
    )
}