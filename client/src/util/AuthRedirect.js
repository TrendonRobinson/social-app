import React, { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";


import { AuthContext } from "../context/auth";

function AuthRoute({ component: Component, ...rest }) {
    let navigate = useNavigate();
    const { user } = useContext(AuthContext);

    if (user) {
        navigate('/')
    }
    
    return (<div></div>)
}

export {AuthRoute}