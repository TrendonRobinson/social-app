import { Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "./App.css";

import { AuthProvider } from "./context/auth";

import MenuBar from "./components/MenuBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    return (
        <AuthProvider>
            <Container>
                <MenuBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />
                </Routes>
            </Container>
        </AuthProvider>
    );
}

export default App;
