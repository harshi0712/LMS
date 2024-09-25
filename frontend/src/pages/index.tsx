// import "./styles/globals.css";
import React from "react";
import Login from "./auth/login";
import Dashboard from "./dashboard";
import useAuth from "../hooks/useAuth";

export default function Home() {
    const { isAuthenticated } = useAuth();

    return (
        <div>
            {isAuthenticated ? <Dashboard/> :  <Login/>}
        </div>
    )

}
