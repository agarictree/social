import React from "react";
import { useParams } from "react-router";

export default function Page(props) {
    let params = useParams();
    return (
        <h1>Contact to: {params.name}</h1>
    )
}