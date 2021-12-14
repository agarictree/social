import React from "react";

export default function Component(props) {
    let {items, add_item} = props.store;
    function addItemToList() {
        let textValue = document.getElementById("text").value;
        add_item(textValue);
        console.log(items);
    }
    return (
        <section>
        <h1>Redux memo app</h1>
            <label htmlFor="text">Enter your text</label>
            <input type="text" id="text" />
            <button id="add_item_btn" onClick={addItemToList}>Add to list</button>
        </section>
    )
}