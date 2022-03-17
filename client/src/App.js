import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "./App.css";


import { AuthProvider, AuthContext } from "./context/auth";
import AuthRoute from "./util/AuthRoute"

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

    const { user } = useContext(AuthContext);

    return (
        <AuthProvider>
            <Container>
                <MenuBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={(user ? <Navigate to="/"/> : <Login />)} />
                    <Route exact path="/register" element={(user ? <Navigate to="/"/> : <Register />)} />
                </Routes>
            </Container>
        </AuthProvider>
    );
}

export default App;
