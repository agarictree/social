import React from "react";

export default function List(props) {
    let {items} = props.store;
    console.log(items);
    return (
        <section>
            <h2>Your added items</h2>
            {items.toString() ? <ul className="list">{
                items.map((elem, i)=> {
                    return (
                        <li key={elem + " " + i}>{elem}</li>
                    )
                })
            }</ul> : <p>Empty.</p>}
        </section>
    )
}