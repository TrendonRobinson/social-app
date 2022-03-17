import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";


import { AuthContext } from "../context/auth";

function AuthRoute({ path: Path, element: Element, ...rest }) {
    const { user } = useContext(AuthContext);

    console.log(rest)

    return (
        <Route
            exact
            path="Path"
            render={(props) =>
                user ? <Navigate to="/" /> : <Element {...props} />
            }
        />
    );
}

export default AuthRoute;