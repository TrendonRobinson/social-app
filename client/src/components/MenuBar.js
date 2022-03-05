import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function MenuBar() {
    const pathname = window.location.pathname;
    
    // /login
    const path = pathname === '/' ? 'home' : pathname.substring(1)
    const [activeItem, setActiveItem] = useState(path);

    const handleItemClick = (e, { name }) =>
        setActiveItem({ activeItem: name });

    return (
        <Menu pointing secondary>
            <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={handleItemClick}
                as={Link}
                to="/"
            />
            {/* <Menu.Item
                name="messages"
                active={activeItem === "messages"}
                onClick={handleItemClick}
            />
            <Menu.Item
                name="friends"
                active={activeItem === "friends"}
                onClick={handleItemClick}
            /> */}
            <Menu.Menu position="right">
                <Menu.Item
                    name="login"
                    active={activeItem === "login"}
                    onClick={handleItemClick}
                    as={Link}
                    to="/login"
                    />
                <Menu.Item
                    name="register"
                    active={activeItem === "register"}
                    onClick={handleItemClick}
                    as={Link}
                    to="/register"
                />
            </Menu.Menu>
        </Menu>
    );
}