import React from "react";
import { connect } from "react-redux";
import { add_item,  adminAction, logOut, userAction } from "./actions";
import Component from "./component";
import List from "./list";


function Index(props) {
    return (
        <main>
            <Component store={props}/>
            <List store={props}/>
        </main>
    )
}
let mapStateToProps = store => {
    return {
        items: store.items,
        login_item: store.login_item
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        add_item: (item) => {
            dispatch(add_item(item));
        },
        logOut: () => {
            dispatch(logOut());
        },
        adminAction: (item) => {
            dispatch(adminAction(item));
        },
        userAction: (login) => {
            dispatch(userAction(login));
        }
    }
}

export let Connected = connect(mapStateToProps, mapDispatchToProps)(Index);