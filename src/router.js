import React from "react";
import { Route, Router, Routes} from "react-router-dom";
import { Connected } from "./index";
import Home from "./home";
import FAQ from "./faq";
import Contact from "./contacts";
import NotFound from "./notfound";
import Page from "./page";
import Login from "./secret";
import Logout from "./logout";
import Admin from "./admin";
import Account from "./account";
import RegisterPage from "./register";

export default function RouterComponent(props) {
    let store = props.store;
    let result = localStorage.getItem("login");

    function AdminPage() {
        return (
            result == "admin" ? <Admin/> : null
        )
    }
    
    function AccountPage() {
        return (
            result && result !="Anonym" && result != "admin" ? <Account/> : null
        )
    }
    
    function ListRights() {
        return (
            result == "Anonym" ? <h1>Please, log in for add items in list!</h1> : <Connected />
        )
    }
    function RegPage() {
        return (
            result == "Anonym" ? <RegisterPage store={store}/> : null
        )
    }
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login store={store}/>}/>
                <Route path="/logout" element={<Logout store={store}/>}/> 
                <Route path="/list"  element={<ListRights />}/>
                <Route path="/admin" element={<AdminPage store={store}/>}/>
                <Route path="/account" element={<AccountPage store={store}/>}/>
                <Route path="FAQ/*" element={<FAQ/>}/>
                <Route path="/contacts" element={<Contact/>}/>
                <Route path="/contacts/:name" element={<Page/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/register" element={<RegPage/>}/>
            </Routes>
    )
}